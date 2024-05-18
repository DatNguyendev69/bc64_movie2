import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieSer } from "../../service/movieSer";
import DetailPageSchedule from "./DetailPageSchedule";
import { useDispatch } from "react-redux";
import {
  turnOffLoading,
  turnOnLoading,
} from "../../redux/loadingReducer/loadingSlice";

const DetailPage = () => {
  // Lấy param idMovie trên url xuống
  const { idMovie } = useParams();
  // console.log("😢 ~ idMovie", idMovie);

  // Gọi action loading từ redux
  const dispatch = useDispatch();

  // Dùng state để setup nơi lưu dữ liệu đã call api về
  const [dataMovie, setDataMovie] = useState();

  // Thực hiện call api
  // B1:
  const fetchDetailMovie = async () => {
    // Bật turnOnLoading đã tạo từ redux loadingSlice
    dispatch(turnOnLoading());
    try {
      let data = await movieSer.getDetailMovie(idMovie);
      // console.log("😢 ~ data", data.data.content);

      // Nơi set lại data đã được call từ api
      setDataMovie(data.data.content);
      setTimeout(() => {
        dispatch(turnOffLoading());
      }, 3000);
    } catch (error) {
      console.log("error: ", error);
      dispatch(turnOffLoading());
    }
  };
  // B2:
  useEffect(() => {
    // Bỏ hàm ở trên vào useEffect
    fetchDetailMovie();
  }, []);

  return (
    <div>
      {/* Chi tiết phim */}
      <div className="bg-gray-700 px-3 py-4">
        <div className="flex space-x-4">
          <div className="w-1/5">
            <img className="w-64 h-96" src={dataMovie?.hinhAnh} alt="" />
          </div>
          <div className="w-4/5 space-y-4 text-white">
            <p className="text-xl font-medium">{dataMovie?.tenPhim}</p>
            <p className="text-sm">{dataMovie?.moTa}</p>
            <button className="bg-blue-500 text-white p-2 rounded">
              Mua vé
            </button>
          </div>
        </div>
      </div>

      {/* Lịch chiếu phim */}
      <DetailPageSchedule idMovie={idMovie} />
    </div>
  );
};

export default DetailPage;
