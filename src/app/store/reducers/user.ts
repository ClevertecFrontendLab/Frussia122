import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/api/login";
import { registerUser } from "../actions/api/registration";
import { UserState } from "../actions/models/types";
import { RootState } from "../store";

const initialState: UserState = {
  token: "",
  errors: {
    statusCode: 200,
    error: "",
    message: "",
  },
  loading: false,
  checked: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    clearUserErrors: (state) => {
      state.errors = initialState.errors;
    },
    logout: (state) => {
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.errors = initialState.errors;
        state.loading = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.errors = initialState.errors;
        if (typeof action.payload === "string") {
          state.token = action.payload;
        }
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        localStorage.removeItem("accessToken");
        state.loading = false;
      });
  },
});

export const { clearUserErrors, logout } = userSlice.actions;

export const tokenSelector = (state: RootState) => state.user.token;
export const userStatusCodeSelector = (state: RootState) => state.user.errors.statusCode;
export const userLoadingSelector = (state: RootState) => state.user.loading;

export default userSlice.reducer;
