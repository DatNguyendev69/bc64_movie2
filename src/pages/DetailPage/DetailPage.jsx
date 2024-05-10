import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieSer } from "../../service/movieSer";

const DetailPage = () => {
  // Lấy param idMovie trên url xuống
  const { idMovie } = useParams();
  console.log("😢 ~ idMovie", idMovie);

  // Dùng state để setup nơi lưu dữ liệu đã call api về
  const [dataMovie, setDataMovie] = useState();

  // Thực hiện call api
  // B1:
  const fetchDetailMovie = async () => {
    try {
      let data = await movieSer.getDetailMovie(idMovie);
      // console.log("😢 ~ data", data.data.content);

      // Nơi set lại data đã được call từ api
      setDataMovie(data.data.content);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  // B2:
  useEffect(() => {
    // Bỏ hàm ở trên vào useEffect
    fetchDetailMovie();
  }, []);

  return (
    <div className="bg-gray-700">
      <div className="flex">
        <div className="w-1/5">
          <img className="w-64 h-96" src={dataMovie?.hinhAnh} alt="" />
        </div>
        <div className="w-4/5 space-y-4 text-white">
          <p className="text-xl font-medium">{dataMovie?.tenPhim}</p>
          <p className="text-sm">{dataMovie?.moTa}</p>
          <button className="bg-blue-500 text-white p-2 rounded">Mua vé</button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
