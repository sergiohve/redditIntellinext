import { createSlice } from "@reduxjs/toolkit";
import Devices from "../../../services/Devices";

export const newSlice = createSlice({
  name: "news",
  initialState: {
    new: [],
  },
  reducers: {
    setNewsList: (state, action) => {
      state.new = action.payload;
    },
    setNewsError: (state) => {
      state.new = "No se cargo las información de los news";
    },
  },
});

export const { setNewsList, setNewsError } = newSlice.actions;
export default newSlice.reducer;

export const fetchAllNews= () => async (distpach) => {
  try {
    const news = await Devices.getNews();
    distpach(setNewsList(news.data.children));
    console.log(news.data.children)
  } catch (error) {
    distpach(setNewsError());
  }
};
