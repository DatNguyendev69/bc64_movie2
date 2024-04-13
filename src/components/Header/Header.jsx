import React from "react";
import { useSelector } from "react-redux";
import UserNavLogout from "./UserNavLogout";
import UserNavLogin from "./UserNavLogin";

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
    <div className="bg-blue-800 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-medium text-2xl">BC64</div>
        <div className="text-white">{renderUserNav()}</div>
      </div>
    </div>
  );
};

export default Header;
