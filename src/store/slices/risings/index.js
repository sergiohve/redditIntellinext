import { createSlice } from "@reduxjs/toolkit";
import Devices from "../../../services/Devices";

export const risingSlice = createSlice({
  name: "risings",
  initialState: {
    rising: [],
  },
  reducers: {
    setRisingsList: (state, action) => {
      state.rising = action.payload;
    },
    setRisingsError: (state) => {
      state.rising = "No se cargo las información de los risings";
    },
  },
});

export const { setRisingsList, setRisingsError } = risingSlice.actions;
export default risingSlice.reducer;

export const fetchAllRisings= () => async (distpach) => {
  try {
    const risings = await Devices.getRisings();
    distpach(setRisingsList(risings.data.children));
  } catch (error) {
    distpach(setRisingsError());
  }
};
