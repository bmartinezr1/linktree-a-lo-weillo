import generated from './generated/pages.json';
import type { SiteProfile } from './site';

export type PublicPageExport = {
  version: 1;
  pages: SiteProfile[];
};

export const generatedPages = (generated as unknown as PublicPageExport).pages;
