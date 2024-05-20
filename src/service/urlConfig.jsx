import axios from "axios";
import { store } from "../redux/store";
import {
  turnOffLoading,
  turnOnLoading,
} from "../redux/loadingReducer/loadingSlice";

// Khi có nhiều export trong 1 file, thì cả file sẽ đc xem là {object}, còn với export default, thì khi import sẽ ko cần {}

export const BASE_URL = "https://movienew.cybersoft.edu.vn";

export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NCIsIkhldEhhblN0cmluZyI6IjA4LzA5LzIwMzUiLCJIZXRIYW5UaW1lIjoiMTgyNTc1MzYwMDAwMCIsIm5iZiI6MTY5NTkyMDQwMCwiZXhwIjoxNzI1OTAxMjAwfQ.bUn442TSuudaoIFjClF2XVWW6Szct5iniENp3_-J9m0";

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBER,
  },
});

export const MA_NHOM = "GP03";

// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("Gửi request");
    // Bật loading khi bắt đầu gửi request
    store.dispatch(turnOnLoading());
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("Nhận response");

    // Tắt loading khi nhận response
    // store.dispatch(turnOffLoading());

    // SetTimeOut để điều chỉnh cho màn hình loading, nhưng thực tế rất rất ít TH dùng SetTimeOut
    setTimeout(() => {
      store.dispatch(turnOffLoading());
    }, 300);

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("Lỗi response");

    // Tắt loading khi reject
    // store.dispatch(turnOffLoading());

    // SetTimeOut để điều chỉnh cho màn hình loading, nhưng thực tế rất rất ít TH dùng SetTimeOut
    setTimeout(() => {
      store.dispatch(turnOffLoading());
    }, 300);
    return Promise.reject(error);
  }
);
