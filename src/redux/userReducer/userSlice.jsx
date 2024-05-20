import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./userThunk";
import { userLocal } from "../../service/userLocal";
// import { message } from "antd";

const initialState = {
  infoUser: userLocal.get(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logoutAction: (state, action) => {
      // Xóa redux
      state.infoUser = null;
      // Xóa local storage
      userLocal.delete();
    },
  },

  // Xử lý bất đồng bộ
  extraReducers: (builder) => {
    // Trạng thái fulfilled: Thành công
    // Trạng thái pending: Chờ
    // Trạng thái rejected: Thất bại
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        if (action.payload) {
          // console.log("action.payload", action.payload);
          state.infoUser = action.payload;
          // Lưu infoUser xuống localStorage
          userLocal.set(action.payload);
        }
      })
      .addCase(loginThunk.pending, (state, action) => {})
      .addCase(loginThunk.rejected, (state, action) => {});
  },
});

export const { logoutAction } = userSlice.actions;

export default userSlice.reducer;
