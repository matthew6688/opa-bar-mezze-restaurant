export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  email: string;
  domain: string;
  fromName: string;
  address?: string;
  phone?: string;
  rating?: number;
  review_count?: number;
  navLinks: { label: string; href: string }[];
  footer: { text: string };
}

export const siteConfig: SiteConfig = {
  name: 'Opa Bar & Mezze',
  tagline: "Greek mezze, oysters, seafood and riverfront banquets",
  description: "Opa Bar & Mezze menu, hours, phone, address and booking details based on public restaurant data.",
  email: 'contact@opa-bar-mezze.com',
  domain: 'opa-bar-mezze.webjuice.fengtalk.ai',
  fromName: 'Opa Bar & Mezze',
  address: '123 Eagle St, Brisbane City QLD 4000, Australia',
  phone: '(07) 2111 5155',
  rating: 4.8,
  review_count: 3848,
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: {
    text: 'Opa Bar & Mezze - 123 Eagle St',
  },
};
