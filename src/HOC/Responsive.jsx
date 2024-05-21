import React from "react";
import { useMediaQuery } from "react-responsive";

export const ResponsiveDT = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: "1024px" });
  return isDesktop ? children : null;
};

export const ResponsiveTL = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: "1023px", maxWidth: "768px" });
  return isTablet ? children : null;
};

export const ResponsiveMB = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: "767px" });
  return isMobile ? children : null;
};
