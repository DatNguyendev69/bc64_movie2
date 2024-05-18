import React from "react";
import { useSelector } from "react-redux";
import UserNavLogout from "./UserNavLogout";
import UserNavLogin from "./UserNavLogin";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { infoUser } = useSelector((state) => state.userReducer);

  const renderUserNav = () => {
    if (infoUser) {
      return <UserNavLogin />;
    } else {
      return <UserNavLogout />;
    }
  };

  return (
    // sticky và top-0 để thanh header luôn dính vào đầu trang
    // z-50 = z-index-50
    <div className="bg-blue-800 p-3 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink
          to={"/"}
          className="text-white font-medium text-2xl hover:text-yellow-400"
        >
          BC64
        </NavLink>
        <div className="text-white">{renderUserNav()}</div>
      </div>
    </div>
  );
};

export default Header;
