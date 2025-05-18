import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      // Ultimate fallback combo for scroll
      window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // no smooth behavior
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0); // Wait for route content to load
  }, [pathname]);

  return null;
};

export default ScrollToTop;
