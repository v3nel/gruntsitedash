import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= breakpoint);
        };

        // Set initial value
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
}
