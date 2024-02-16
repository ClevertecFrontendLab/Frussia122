import { createSlice} from "@reduxjs/toolkit";
import { registerUser } from "../actions/registration";
import { UserState, errorType } from "../actions/models/types";
import { loginUser } from "../actions/login";

const initialState: UserState = {
  userToken: {
    accessToken: '',
  },
    errors: {
        statusCode: 0,
        error: '',
        message: '',
    },
    loading: false,
    rememberMe: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
      clearErrors: (state) => {
        state.errors = {
          statusCode: 0,
          error: "",
          message: "",
        };
      },
      clearAccessToken: (state) => {
        state.userToken.accessToken = "";
      },
      toggleRememberMe: (state) => {
        state.rememberMe = !state.rememberMe;
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
          state.errors = {
            statusCode: 200,
            error: '',
            message: '',
          }
          state.loading = false;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.errors = {
            statusCode: 0,
            error: '',
            message: '',
          };
          if(action.payload.accessToken) {
            localStorage.setItem('accessToken', action.payload.accessToken)
          }
          state.loading = false;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.errors = action.payload as errorType;
            state.loading = false;
        })
        .addCase(loginUser.rejected, (state, action) => {
          localStorage.removeItem('accessToken');  
          state.errors = action.payload as errorType;
          state.loading = false;
          
        });
    },
  });

export const { clearErrors, clearAccessToken, toggleRememberMe } = userSlice.actions;
export default userSlice.reducer;
