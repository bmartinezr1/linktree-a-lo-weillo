import type { APIRoute } from 'astro';
import { site } from '../../data/site';
import { promises as fs } from 'node:fs';
import path from 'node:path';

export const prerender = false;

interface BookingPayload {
  name: string;
  phone: string;
  service: string;
  datetime: string;
  notes?: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    let payload: BookingPayload;

    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      payload = await request.json();
    } else if (contentType.includes('form')) {
      const form = await request.formData();
      payload = {
        name: String(form.get('name') || ''),
        phone: String(form.get('phone') || ''),
        service: String(form.get('service') || ''),
        datetime: String(form.get('datetime') || ''),
        notes: String(form.get('notes') || ''),
      };
    } else {
      const rawText = await request.text();
      payload = rawText ? JSON.parse(rawText) : ({} as BookingPayload);
    }

    const name = (payload.name || '').trim();
    const phone = (payload.phone || '').trim();
    const service = (payload.service || '').trim();
    const datetime = (payload.datetime || '').trim();
    const notes = (payload.notes || '').trim();

    // Validaciones básicas
    if (!name || !phone) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'El nombre y el teléfono son campos obligatorios.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const bookingId = `cita_${Date.now()}`;
    const createdAt = new Date().toISOString();

    // Crear el mensaje estructurado para WhatsApp / Mensajería
    const lines = [
      '💈 *NUEVA RESERVA - 7E BARBER SHOP*',
      `👤 *Cliente:* ${name}`,
      `📞 *Teléfono:* ${phone}`,
      `✂️ *Servicio:* ${service || 'Corte'}`,
      `📅 *Horario preferido:* ${datetime || 'A coordinar'}`,
    ];

    if (notes) {
      lines.push(`💬 *Detalle:* ${notes}`);
    }

    const formattedMessage = lines.join('\n');

    // Comprobar si el barbero ya tiene número configurado
    const barberPhone = (site.whatsappNumber || '').replace(/\D/g, '');
    const hasPhoneConfigured = barberPhone.length >= 8;
    const whatsappUrl = hasPhoneConfigured
      ? `https://wa.me/${barberPhone}?text=${encodeURIComponent(formattedMessage)}`
      : null;

    // Guardar la cita en un archivo JSON local para no perder ninguna solicitud
    const bookingRecord = {
      id: bookingId,
      createdAt,
      name,
      phone,
      service,
      datetime,
      notes,
      formattedMessage,
      status: 'pendiente',
    };

    try {
      const dataDir = path.resolve(process.cwd(), 'src/data');
      const citasFile = path.join(dataDir, 'citas.json');
      let citas: any[] = [];

      try {
        const fileContent = await fs.readFile(citasFile, 'utf-8');
        citas = JSON.parse(fileContent);
      } catch {
        citas = [];
      }

      citas.unshift(bookingRecord);
      await fs.writeFile(citasFile, JSON.stringify(citas, null, 2), 'utf-8');
    } catch (saveError) {
      console.warn('No se pudo guardar la cita en el archivo local:', saveError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: '¡Solicitud registrada correctamente!',
        bookingId,
        hasPhoneConfigured,
        whatsappUrl,
        formattedMessage,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err: any) {
    console.error('Error en /api/agendar:', err);
    return new Response(
      JSON.stringify({
        success: false,
        error: err?.message || 'Error interno al procesar la cita.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
