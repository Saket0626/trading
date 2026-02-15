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
    const canonicalUrl = `${BASE_URL}${pathname === "/" ? "/" : pathname}`;

    // Update or create canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;
  }, [pathname]);

  return null;
}
