import { createSlice } from "@reduxjs/toolkit";
import Devices from "../../../services/Devices";

export const hotSlice = createSlice({
  name: "hots",
  initialState: {
    hot: [],
  },
  reducers: {
    setHotsList: (state, action) => {
      state.hot = action.payload;
    },
    setHotsError: (state) => {
      state.hot = "No se cargo las información de los hot";
    },
  },
});

export const { setHotsList, setHotsError } = hotSlice.actions;
export default hotSlice.reducer;

export const fetchAllHots = () => async (distpach) => {
  try {
    const hots = await Devices.getHost();
    distpach(setHotsList(hots.data.children));
    console.log(hots.data.children)
  } catch (error) {
    distpach(setHotsError());
  }
};
