import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSer } from "../../service/userSer";

export const loginThunk = createAsyncThunk(
  "userReducer/loginThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await useSer.postLogin(payload);

      let infoUser = data.data.content;

      return infoUser;
    } catch (err) {
      console.log("😢 ~ err", err);
    }
  }
);
