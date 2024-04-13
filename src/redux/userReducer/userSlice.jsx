import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./userThunk";
import { userLocal } from "../../service/userLocal";

const initialState = {
  infoUser: userLocal.get(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logoutAction: (state, action) => {
      state.infoUser = null;
      userLocal.delete();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);
        state.infoUser = action.payload;
        userLocal.set(action.payload);
      })
      .addCase(loginThunk.pending, (state, action) => {})
      .addCase(loginThunk.rejected, (state, action) => {});
  },
});

export const { logoutAction } = userSlice.actions;

export default userSlice.reducer;
