import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  amount: 0,
};

const signUpSlice = createSlice({
  name: "registerUsers",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});
export const userArray = (state) => state.registerUsers.users;
export const { addUser } = signUpSlice.actions;

export default signUpSlice.reducer;
