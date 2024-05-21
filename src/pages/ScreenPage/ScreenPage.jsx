import React from "react";
import { useParams } from "react-router-dom";
import ListGhe from "./ListGhe/ListGhe";

const ScreenPage = () => {
  const { maLichChieu } = useParams();
  // console.log("😢 ~ maLichChieu", maLichChieu);

  return (
    <div className="flex">
      <ListGhe maLichChieu={maLichChieu} />
    </div>
  );
};

export default ScreenPage;
