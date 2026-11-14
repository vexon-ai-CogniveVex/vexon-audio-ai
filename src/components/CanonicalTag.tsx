import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://cognivevex.com";

const CanonicalTag = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    // Clean normalized path without trailing slash (except root)
    const cleanPath = pathname === "/" ? "" : pathname.replace(/\/+$/, "");
    canonicalLink.setAttribute("href", `${BASE_URL}${cleanPath}`);
  }, [pathname]);

  return null;
};

export default CanonicalTag;

