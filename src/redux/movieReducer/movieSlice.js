import { createSlice } from "@reduxjs/toolkit";
import { getListGheThunk } from "./movieThunk";

const initialState = {
  listGhe: [],
  listGheDangDat: [],
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    addGheAction: (state, action) => {
      let ghe = action.payload;
      // Check xem ghế đẩy lên redux đã tồn tại chưa, sau đó xử lý. Nếu chưa tồn tại thì đẩy lên, còn nếu đã tồn tại rồi thì sẽ xóa đi
      let index = state.listGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === ghe.maGhe
      );
      if (index != -1) {
        // Nếu ghế đó đã tồn tại trong list ghế đang đặt thì xóa nó đi
        state.listGheDangDat.splice(index, 1);
      } else {
        // Nếu ghế đó chưa tồn tại trong list ghế đang đặt thì thêm nó vào
        state.listGheDangDat.push(ghe);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListGheThunk.fulfilled, (state, action) => {
      let infoScreenPage = action.payload;
      console.log("😢 ~ infoScreenPage", infoScreenPage);
      let listGhe = infoScreenPage.danhSachGhe.slice(0, 100);
      state.listGhe = listGhe;
    });
  },
});

export const { addGheAction } = movieSlice.actions;

export default movieSlice.reducer;
