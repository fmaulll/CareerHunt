import { createSlice } from "@reduxjs/toolkit";

type UserInfo = {
  id: number;
  username: string;
  token: string;
};

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : null;

const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

export interface authState {
  loading: boolean;
  userInfo: null | UserInfo;
  userToken: string | null;
  error: null | string;
  success: boolean;
}

const initialState: authState = {
  loading: false,
  userInfo,
  userToken,
  error: null,
  success: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.userInfo = {
        id: action.payload.id,
        username: action.payload.username,
        token: action.payload.token,
      };
      state.userToken = action.payload.token;
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          id: action.payload.id,
          username: action.payload.username,
          token: action.payload.token,
        })
      );
      localStorage.setItem("token", action.payload.token);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    userLogout: (state) => {
      localStorage.clear()
      state.userInfo = null;
      state.userToken = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLogin, setLoading, setError, userLogout } = authSlice.actions;

export default authSlice.reducer;
