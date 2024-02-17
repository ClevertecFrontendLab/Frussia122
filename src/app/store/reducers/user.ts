import { createSlice} from "@reduxjs/toolkit";
import { registerUser } from "../actions/registration";
import { UserState, errorType } from "../actions/models/types";
import { loginUser } from "../actions/login";
import { ERROR_LOGIN, HOMEPAGE } from "@shared/Constants/Routes/ROUTE";
import { history } from "../store";

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
    checked: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
      clearUserErrors: (state) => {
        state.errors = {
          statusCode: 0,
          error: "",
          message: "",
        };
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
        .addCase(loginUser.fulfilled, (state) => {
          state.errors = {
            statusCode: 200,
            error: '',
            message: '',
          };
          state.loading = false;
        })
        .addCase(registerUser.rejected, (state) => {
          
            state.loading = false;
        })
        .addCase(loginUser.rejected, (state) => {
          localStorage.removeItem('accessToken');  
          state.loading = false;
        });
    },
  });

export const { clearUserErrors } = userSlice.actions;
export default userSlice.reducer;
