import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import { movieSer } from "../../../service/movieSer";

const CarouselMovie = () => {
  const [dataBan, setDataBan] = useState([]);

  const carouRef = useRef();

  const fetchBannerMovie = async () => {
    try {
      const dataBanner = await movieSer.getBannerMovie();
      // console.log("😢 ~ dataBanner", dataBanner);

      let newDataBanner = dataBanner.data.content;
      // console.log("😢 ~ newDataBanner", newDataBanner);

      setDataBan(newDataBanner);
    } catch (err) {
      console.log("err:", err);
    }
  };

  useEffect(() => {
    // call api
    fetchBannerMovie();
  }, []);

  return (
    <div className="relative">
      <Carousel ref={carouRef}>
        {/* map */}
        {dataBan.map((banner) => {
          return (
            <div key={banner.maBanner} className="w-full">
              <img
                style={{ height: "500px" }}
                className="w-full"
                src={banner.hinhAnh}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
      <button
        onClick={() => {
          carouRef.current.next();
        }}
        className="bg-blue-300 p-2 rounded mx-3 absolute right-3 top-1/3"
      >
        Next
      </button>
      <button
        onClick={() => {
          carouRef.current.prev();
        }}
        className="bg-blue-300 p-2 rounded absolute left-3 top-1/3"
      >
        Pre
      </button>
    </div>
  );
};

export default CarouselMovie;
