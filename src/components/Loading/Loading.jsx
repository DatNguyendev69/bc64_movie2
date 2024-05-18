import React from "react";
import { useSelector } from "react-redux";

const Loading = () => {
  const { isLoading } = useSelector((state) => state.loadingReducer);

  return (
    <div
      className={`w-screen h-screen bg-black text-white fixed z-50 ${
        isLoading ? "" : "hidden"
      }`}
    >
      <div className="w-full h-full flex justify-center items-center">
        <span>Loading ...</span>
      </div>
    </div>
  );
};

export default Loading;
