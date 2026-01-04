export const headerItems = [
  { id: "home", link: "/", value: "Головна" },
  { id: "about-project", link: "/about-project", value: "Про проєкт" },
  { id: "about-college", link: "/about-college", value: "Про коледж" },
  { id: "about-cluster", link: "/about-cluster", value: "Про кластер" },
];

export const langs = { uk: "Укр", en: "Eng" };

export enum LangEnum {
  uk = "uk",
  en = "en",
}

import instagramIcon from "@/assets/images/icons/instagram-icon.svg";
import facebookIcon from "@/assets/images/icons/facebook-icon.svg";
import linkedinIcon from "@/assets/images/icons/linkedin-icon.svg";
import websiteIcon from "@/assets/images/icons/website-icon.svg";

export const linksIcons = {
  facebook: { icon: facebookIcon, name: "Facebook" },
  instagram: { icon: instagramIcon, name: "Instagram" },
  linkedin: { icon: linkedinIcon, name: "LinkedIn" },
  // website: websiteIcon,
};

export function getLinkType(url: string) {
  if (url.includes("facebook.com")) return "facebook";
  if (url.includes("instagram.com")) return "instagram";
  if (url.includes("linkedin.com")) return "linkedin";
  return "website";
}
