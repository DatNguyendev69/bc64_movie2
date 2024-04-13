import React, { useEffect, useState } from "react";
import { movieSer } from "../../../service/movieSer";
import { useNavigate } from "react-router-dom";

const ListMovie = () => {
  const [dataMovieList, setDataMovieList] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    // call api từ bây giờ luôn gọi trong useEffect
    // call api
    fetchListMovie();
  }, []);

  const navigatePageDetail = (id) => {
    navigate(`detail-movie/${id}`);
  };

  const fetchListMovie = async () => {
    try {
      const data = await movieSer.getListMovies();
      console.log("😢 ~ data", data);

      let movieList = data.data.content;
      console.log("😢 ~ movieList", movieList);

      setDataMovieList(movieList);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const renderMovieList = () => {
    // Dấu ? này gọi là: optional chaining operator
    return dataMovieList?.map((movie) => {
      return (
        <div
          // onClick={navigatePageDetail(movie.maPhim)}
          key={movie.maPhim}
          className="border rounded"
        >
          <div className="h-96">
            <img
              className="w-full h-full object-cover rounded"
              src={movie.hinhAnh}
              alt=""
            />
          </div>
          <div className="p-3 space-y-2">
            <p className="font-medium">{movie.tenPhim}</p>
            <p className="text-sm text-gray-300">
              {movie.moTa.substring(0, 50)}...
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container mx-auto">
      <h3 className="text-xl font-medium">Danh sách phim</h3>
      {/* Danh sách phim */}
      <div className="grid grid-cols-4 gap-10">
        {/* Card phim */}
        {renderMovieList()}
      </div>
    </div>
  );
};

export default ListMovie;
