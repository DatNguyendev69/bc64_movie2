import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { useSer } from "../../service/userSer";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/userReducer/userThunk";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const LoginPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formLogin = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: async (value) => {
      dispatch(loginThunk(value)).then(() => {
        message.success("Đăng nhập thành công");
        navigate("/");
      });
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .required("Tài khoản không được để trống")
        .min(4, "Tài khoản ít nhất là 4 ký tự"),
      matKhau: yup
        .string()
        .required("Mật khẩu không được để trống")
        .min(3, "Mật khẩu phải ít nhất 3 ký tự"),
    }),
  });

  return (
    <div>
      <form
        onSubmit={formLogin.handleSubmit}
        action=""
        className="border p-3 rounded-md space-y-6"
      >
        <h3 className="text-sm font-medium">Đăng nhập</h3>
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Tài khoản
          </label>
          <input
            type="text"
            name="taiKhoan"
            id="taiKhoan"
            className="border rounded p-2 w-full"
            onChange={formLogin.handleChange}
          />
          <p className="text-red-500 h-3">{formLogin.errors.taiKhoan}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Mật khẩu
          </label>
          <input
            type="text"
            name="matKhau"
            id="matKhau"
            className="border rounded p-2 w-full"
            onChange={formLogin.handleChange}
          />
          <p className="text-red-500 h-3">{formLogin.errors.matKhau}</p>
        </div>
        <button className="bg-blue-600 text-white p-2 rounded">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
