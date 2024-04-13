import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import iconlogin from "../assets/iconlogin.json";
import Lottie from "lottie-react";
import { useSelector } from "react-redux";

const AuthTemplate = () => {
  const navigate = useNavigate();

  const { infoUser } = useSelector((state) => state.userReducer);
  console.log("😢 ~ infoUser", infoUser);

  useEffect(() => {
    if (infoUser) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2 h-full">
        <Lottie animationData={iconlogin} />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthTemplate;
