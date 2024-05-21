import React from "react";
import { ResponsiveDT, ResponsiveMB, ResponsiveTL } from "../../HOC/Responsive";
import ResponsiveDesktop from "./ResponsiveDesktop";
import ResponsiveTablet from "./ResponsiveTablet";
import ResponsiveMobile from "./ResponsiveMobile";

const Responsive = () => {
  return (
    <div>
      {/* Desktop */}
      <ResponsiveDT>
        <ResponsiveDesktop />
      </ResponsiveDT>
      {/* Tablet */}
      <ResponsiveTL>
        <ResponsiveTablet />
      </ResponsiveTL>
      {/* Mobile */}
      <ResponsiveMB>
        <ResponsiveMobile />
      </ResponsiveMB>
    </div>
  );
};

export default Responsive;
