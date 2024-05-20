import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSer } from "../../service/userSer";
import { message } from "antd";

export const loginThunk = createAsyncThunk(
  "userReducer/loginThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await useSer.postLogin(payload.value);

      let infoUser = data.data.content;
      payload.navigateCustom();
      message.success("Đăng nhập thành công");

      return infoUser;
    } catch (err) {
      // console.log("😢 ~ err", err);
      message.error("Đăng nhập thất bại");
      return rejectWithValue(err);
    }
  }
);
