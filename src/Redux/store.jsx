import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "./Slice/BlogSlice/BlogSlice";
export const store = configureStore({
  reducer: {
    BlogSlice: BlogSlice,
  },
});
