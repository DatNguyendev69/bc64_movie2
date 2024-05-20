import React from "react";

const ResponsiveTailwinds = () => {
  return (
    // Responsive của tailwind mặc định là mobile first

    <div className="h-20 bg-black sm:bg-yellow-400 md:bg-blue-500 lg:bg-red-500">
      <span>ResponsiveTailwinds</span>
    </div>
  );
};

export default ResponsiveTailwinds;
