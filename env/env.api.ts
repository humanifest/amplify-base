/*
NOTE: This file acts as a layer of abstraction between environment variables
and logic. It should set default values in case the environment does not provide
the expected variable
*/

export const PROTOCOL = import.meta.env.VITE_PROTOCOL || "http";
export const HOST = import.meta.env.VITE_HOST || "localhost";
export const SUPER_CLIENT_PORT =
  import.meta.env.VITE_SUPER_CLIENT_PORT || "5173";
export const SUPER_CORE_PORT = import.meta.env.VITE_SUPER_CORE_PORT || "3001";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "LocalDevelop";
export const COPYRIGHT = import.meta.env.VITE_COPYRIGHT || "CompanyName";
export const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || "Our Company";
export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL || "contact@mailserver.com";
export const FAV_ICON_URL = import.meta.env.VITE_FAV_ICON_URL || "/logo.svg";
