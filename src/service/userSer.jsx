import { http } from "./urlConfig";

export const useSer = {
  postLogin: (data) => {
    let uri = "/api/QuanLyNguoiDung/DangNhap";
    return http.post(uri, data);
  },
};
