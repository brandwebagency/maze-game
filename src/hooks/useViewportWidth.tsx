import { useState, useEffect } from "react";

const useViewportWidth = (number: number) => {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsBreakpoint(window.innerWidth < number);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isBreakpoint;
};

export default useViewportWidth;
