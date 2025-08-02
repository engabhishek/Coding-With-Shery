import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};

const UserReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    loaduser: (state, action) => {
      state.users = action.payload;
    },
    logoutuser: (state) => {
      state.users = null;
    },
  },
});

export const { loaduser, logoutuser } = UserReducer.actions;
export default UserReducer.reducer;
