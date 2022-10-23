import { createSlice } from "@reduxjs/toolkit";
import Devices from "../../../services/Devices";

export const controversialSlice = createSlice({
  name: "controversiales",
  initialState: {
    controversial: [],
  },
  reducers: {
    setControversialList: (state, action) => {
      state.controversial = action.payload;
    },
    setControversialError: (state) => {
      state.controversial = "No se cargo las información de los post controversiales";
    },
  },
});

export const { setControversialList, setControversialError } = controversialSlice.actions;
export default controversialSlice.reducer;

export const fetchAllControversial = () => async (distpach) => {
  try {
    const controversiales = await Devices.getControversial();
    distpach(setControversialList(controversiales.data.children));
    console.log(controversiales.data.children)
   
  } catch (error) {
    distpach(setControversialError());
  }
};
