import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const LoginPage = () => {
  const formLogin = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (value) => {
      //   console.log("😢 ~ value", value);
      const promise = axios({
        baseURL:
          "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: value,
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NCIsIkhldEhhblN0cmluZyI6IjA4LzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTc1MzYwMDAwMCIsIm5iZiI6MTY5NTkyMDQwMCwiZXhwIjoxNzI1OTAxMjAwfQ.fWIHiHRVx9B7UlCgFCwvvXAlcVc-I-RB603rEDsM_wI",
        },
      });

      promise
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          console.log(err);
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
        <button className="bg-blue-400 text-white p-2 rounded">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
