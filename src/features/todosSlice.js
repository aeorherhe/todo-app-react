import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { updateLocalStorage, getLocalStorage } from "../services/localStorage";

const currentList = getLocalStorage();

const initialState = {
  list: currentList || [],
  inputField: "",
  active: "all",
  itemsLeft: currentList.filter((todo) => !todo.completed).length,
};

const todosSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    // add
    addTodo: (state, { payload }) => {
      const newItem = {
        id: nanoid(),
        item: payload,
        completed: false,
      };
      state.list.unshift(newItem);
      state.itemsLeft = state.list.filter((todo) => !todo.completed).length;
      state.inputField = "";
      updateLocalStorage(state.list);
    },

    // toggle single complete
    toggleComplete: (state, { payload: { id, completed } }) => {
      state.list.map((todo) => {
        if (todo.id === id) {
          todo.completed = !completed;
        }
      });
      state.itemsLeft = state.list.filter((todo) => !todo.completed).length;
      updateLocalStorage(state.list);
    },

    // delete
    deleteTodo: (state, { payload }) => {
      state.list = state.list.filter((todo) => todo.id !== payload);
      updateLocalStorage(state.list);
    },

    // clear completed
    clearCompleted: (state) => {
      state.active = "clear";
      state.list = state.list.filter((todo) => !todo.completed);
      updateLocalStorage(state.list);
    },

    // edit
    editTodo: (state, action) => {
      state.list[action.payload.index].title = action.payload.title;
    },

    // show active
    showActive: (state) => {
      state.active = "active";
      state.list = state.list.filter((todo) => !todo.completed);
    },

    // show completed
    showCompleted: (state) => {
      state.active = "completed";
      state.list = state.list.filter((todo) => todo.completed);
    },

    // update input field
    updateInputField: (state, { payload }) => {
      state.inputField = payload;
    },

    // show all
    showAll: (state) => {
      state.active = "all";
      state.list = currentList;
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  deleteTodo,
  clearCompleted,
  editTodo,
  showActive,
  showCompleted,
  showAll,
  updateInputField,
} = todosSlice.actions;

export default todosSlice.reducer;
