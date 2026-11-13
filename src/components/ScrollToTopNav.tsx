import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopNav = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                window.setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                }, 50);
                return;
            }
        }

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [pathname, hash]);

    return null;
};

export default ScrollToTopNav;
