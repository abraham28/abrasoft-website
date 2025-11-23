import { NavLink } from "./utils/linkProps";

export const FACEBOOK_LINK = "https://www.facebook.com/abrasoft";
export const EMAIL_ADDRESS = "abraham.guerrero@abrasoft.com";
export const CONTACT_NUMBER = "(+63) 915-654-9303";

export const locales = ["en", "tl"];

//ROUTES
export const HOME_ROUTE = "/";
export const ABOUT_ROUTE = "/about";
export const APPS_ROUTE = "/apps";
export const CONTACT_ROUTE = "/contact-us";

export const NAV_HOME = "/";

export const NAV_LINKS_ARR: NavLink[] = [
  { path: HOME_ROUTE, name: "Home" },
  { path: ABOUT_ROUTE, name: "About Us" },
  { path: APPS_ROUTE, name: "Apps" },
];

export const OFFICIAL_DOMAIN = "abrasoft.com";
export const OFFICIAL_DOMAIN_URL = `https://${OFFICIAL_DOMAIN}/`;

export const COPYRIGHT = "© 2025 Abrasoft";
export const TAGLINE =
  "Empowering Businesses Through Cloud-Based SaaS Solutions";
