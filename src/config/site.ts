export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  email: string;
  domain: string;
  fromName: string;
  navLinks: { label: string; href: string }[];
  footer: { text: string };
}

export const siteConfig: SiteConfig = {
  name: 'Opa Bar & Mezze',
  tagline: 'Restaurant in Brisbane',
  description: 'Opa Bar & Mezze is a restaurant in Brisbane City with a shared mezze menu and direct reservations.',
  email: '',
  domain: 'opabar.com.au',
  fromName: 'Opa Bar & Mezze',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: {
    text: 'Built with WebJuice Stack.',
  },
};
