// src/state/menuSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuOpen: false, // Matches your useSelector
  },
  reducers: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;