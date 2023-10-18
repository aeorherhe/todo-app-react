import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const themesSlices = createSlice({
  name: "themes",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = themesSlices.actions;

export default themesSlices.reducer;
