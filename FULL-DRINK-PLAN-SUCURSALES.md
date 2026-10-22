# Plan de diseño: Full Drink y sus sucursales

## Objetivo

Convertir la página actual de Full Drink en una página de marca que presente claramente sus dos sucursales, facilite encontrar cada local y conserve la estética oscura con acentos dorados que ya tiene el sitio.

## Estructura propuesta

1. **Encabezado de marca**
   - Mantener el logo y el título **Full Drink** centrados.
   - No incluir una sucursal en el subtítulo: esta página representa a toda la marca.
   - Usar una frase breve de presentación, sin repetir información que aparecerá en las secciones siguientes.

2. **Sucursales**
   - Incorporar una sección titulada **Nuestras sucursales** después de la presentación.
   - Mostrar una tarjeta por local. En escritorio, ubicarlas en dos columnas; en móviles, apilarlas en una columna.
   - Cada tarjeta incluye fotografía, nombre de la sucursal, dirección, horario y accesos a ubicación y reseñas de Google.

   | Sucursal | Fotografía | Información |
   | --- | --- | --- |
   | **Concepción** | Fachada con el letrero rojo de Full Drink | Juan de Dios Rivera 1235. Martes a sábado, 12:00–22:00; domingo y lunes, cerrado. |
   | **San Pedro de la Paz** | Fachada con mural colorido | Los Aromos #1465. 12:00–01:00 hrs. |

3. **Categorías**
   - Conservar **Vinos**, **Cervezas** y **Licores** en una fila cuando el ancho disponible lo permita.
   - Mantener las viñetas sin cuadros, con el tratamiento tipográfico y los colores actuales.

4. **Reseñas y promociones**
   - Asociar cada botón de reseña con su sucursal y su enlace de Google correspondiente.
   - Mantener el botón de promociones debajo del bloque de reseñas, para que siga siendo fácil de encontrar.

## Tratamiento de las fotografías

- Usar la foto del letrero rojo para **Sucursal Concepción** y la fachada con mural para **Sucursal San Pedro de la Paz**.
- Dar a ambas imágenes el mismo ancho, proporción horizontal y esquinas redondeadas, con un borde dorado discreto que combine con la página.
- Ajustar el recorte para que el letrero o mural y la entrada del local sigan siendo reconocibles. En móviles, priorizar el centro de la fachada.
- Añadir texto alternativo descriptivo que indique la sucursal. Evitar texto incrustado sobre las imágenes.
- Antes de implementar, copiar las fotos a los recursos públicos del proyecto y usar nombres claros asociados a cada sucursal.

## Comportamiento adaptable

- En pantallas grandes, presentar las tarjetas lado a lado y con alturas visuales equilibradas.
- En pantallas pequeñas, apilarlas, mantener la información legible y dejar los botones cómodos para tocar.
- Comprobar que las direcciones, horarios y botones no se corten ni provoquen desplazamiento horizontal.

## Orden de implementación

1. Preparar y agregar al proyecto las dos fotografías de fachada.
2. Actualizar los datos de la página para incluir ambas sucursales y sus horarios.
3. Crear las tarjetas reutilizando los estilos y componentes existentes cuando sea posible.
4. Revisar el diseño en móvil y escritorio, y verificar cada enlace de ubicación y reseña.

## Datos por confirmar antes de publicar

- Confirmar los días de atención de la sucursal San Pedro de la Paz; el horario recibido indica 12:00–01:00 hrs, pero no especifica los días.
- Confirmar si la sucursal de Concepción mantiene el horario publicado actualmente: martes a sábado de 12:00 a 22:00, domingo y lunes cerrado.
- Confirmar que cada enlace de ubicación y reseña abra la sucursal correcta.
