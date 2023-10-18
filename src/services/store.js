import { configureStore } from "@reduxjs/toolkit";
import { todosReducer, themesReducer } from "../features";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    themes: themesReducer,
  },
});
