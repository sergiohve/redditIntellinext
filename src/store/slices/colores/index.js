import { createSlice } from "@reduxjs/toolkit";
import Devices from "../../../services/Devices";

export const colorSlice = createSlice({
  name: "colores",
  initialState: {
    color: "",
  },
  reducers: {
    setColorList: (state, action) => {
      state.color = action.payload;
    },
    setColorError: (state) => {
      state.color = "No se cargo el color";
    },
  },
});

export const { setColorList, setColorError } = colorSlice.actions;
export default colorSlice.reducer;

export const fetchAllColor = (color) => async (distpach) => {
  try {
    const colores = await Devices.getColor(color);
    distpach(setColorList(colores));
    console.log(colores)
   
  } catch (error) {
    distpach(setColorError());
  }
};
