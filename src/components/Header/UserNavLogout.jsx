import React from "react";
import { useNavigate } from "react-router-dom";

const UserNavLogout = () => {
  const navigate = useNavigate();

  return (
    <div className="space-x-3">
      <button
        onClick={() => {
          navigate("/auth/login");
        }}
        className="text-white bg-red-600 rounded p-2"
      >
        Đăng nhập
      </button>
      <button className="text-white bg-red-400 rounded p-2">Đăng ký</button>
    </div>
  );
};

export default UserNavLogout;
