import axios from "../../api/axiosconfig";
import { loaduser, logoutuser } from "../reducers/userReducer";

export const asyncRegisterUser = (newUser) => async (dispatch) => {
  try {
    await axios.post("/users", newUser);
  } catch (error) {
    console.error("Register error:", error);
  }
};

export const asyncLoginUser = (credentials) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/users?email=${credentials.email}&password=${credentials.password}`
    );
    console.log("Fetched users:", data);
    localStorage.removeItem("user");

    if (data.length > 0) {
      localStorage.setItem("user", JSON.stringify(data[0]));
      dispatch(loaduser(data[0]));
      return { payload: data[0] };
    } else {
      return { payload: null };
    }
  } catch (error) {
    console.error("Login error:", error);
    return { payload: null };
  }
};

export const asyncCurrentUser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loaduser(user));
    } else console.log("No user logged in");
  } catch (error) {
    console.error("Error loading current user:", error);
  }
};

export const asyncLogOutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("user");
    dispatch(logoutuser());
    console.log("User logged out");
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export const asyncLoaduser = () => async (dispatch, getState) => {
  try {
    const { user } = await axios.get("/users");
    dispatch(loaduser(user));
  } catch (error) {
    console.log("error");
  }
};

export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
  try {
    await axios.patch("/users/" + id, user);
    dispatch(asyncLoaduser());
  } catch (error) {
    console.log(error);
  }
};
