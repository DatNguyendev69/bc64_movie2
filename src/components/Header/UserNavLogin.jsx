import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../redux/userReducer/userSlice";

const UserNavLogin = () => {
  const dispatch = useDispatch();

  const { infoUser } = useSelector((state) => state.userReducer);

  return (
    <div className="space-x-3">
      <span className="text-white text-xs">{infoUser.hoTen}</span>
      <button
        onClick={() => {
          dispatch(logoutAction());
        }}
        className="text-white bg-red-400 rounded p-2"
      >
        Đăng xuất
      </button>
    </div>
  );
};

export default UserNavLogin;
