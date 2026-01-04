export interface PartnersList {
  id: string;
  slug: string;
  title: string;
  logo_url: string;
}

export interface PartnerDetails {
  id: string;
  slug: string;
  logo_url: string;
  title: string;
  subtitle: string;
  infoItems: string[];
  quote: { before: string; after: string };
  motto: string;
  thankfulWords: string;
  links: string[];
}