/**
 * Updates document title and canonical URL based on current route.
 * Used for SEO - helps search engines understand each page's URL.
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.chartwise.info";

export function SEOHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = `${BASE_URL}${pathname === "/" ? "/" : pathname}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;
  }, [pathname]);

  return null;
}
