import { configureStore } from "@reduxjs/toolkit";
//reducer
import bests from "./slices/bests";
import hots from "./slices/hots";
import news from "./slices/news";
import risings from "./slices/risings";
import colores from "./slices/colores";
import controversiales from "./slices/controversiales";

export default configureStore({
  reducer: {
    bests,
    hots,
    news,
    risings,
    controversiales,
    colores,
  },
});
