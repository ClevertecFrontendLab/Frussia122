import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../Actions/api/login";
import { registerUser } from "../Actions/api/registration";
import { UserState } from "../Actions/models/types";


const initialState: UserState = {
    token: '',
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
        .addCase(loginUser.fulfilled, (state, action) => {
          state.errors = {
            statusCode: 200,
            error: '',
            message: '',
          };
          if(action.payload) {
            state.token = action.payload;
          }
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
