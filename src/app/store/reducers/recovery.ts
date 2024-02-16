import { createSlice} from "@reduxjs/toolkit";
import { recoverPassword } from "../actions/recoverPassword";
import { UserRecoverPass, errorType } from "../actions/models/types";
import { codeVerification } from "../actions/codeVerification";
import { ChangePassword } from "../actions/changePassword";

const initialState: UserRecoverPass = {
    email: '',
    errors: {
        statusCode: 200,
        error: '',
        message: '',
    },
    message: '',
    loading: false,
}

const recoverSlice = createSlice({
    name: 'recover',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(recoverPassword.pending, (state) => {
            state.loading = true
        })
        .addCase(codeVerification.pending, (state) => {
            state.loading = true
        })
        .addCase(ChangePassword.pending, (state) => {
            state.loading = true
        })
        .addCase(recoverPassword.fulfilled, (state, action) => {
            state.errors = {
                statusCode: 200,
                error: '',
                message: '',
              };
            state.email = action.payload.email;
            state.message = action.payload.message;
            state.loading = false;
            sessionStorage.setItem('email', action.payload.email);
            sessionStorage.setItem('stage', '1');
        })
        .addCase(ChangePassword.fulfilled, (state, action) => {
            state.errors = {
                statusCode: 200,
                error: '',
                message: '',
              };
            state.message = action.payload.message;
            state.loading = false
            sessionStorage.setItem('stage', '3');
        })
        .addCase(codeVerification.fulfilled, (state, action) => {
            state.errors = {
                statusCode: 200,
                error: '',
                message: '',
              };
            state.email = action.payload.email;
            state.loading = false
            sessionStorage.setItem('stage', '2');
        })
        .addCase(recoverPassword.rejected, (state, action) => {
            state.errors = action.payload as errorType;
            state.loading = false
            state.message = '';
        })
        .addCase(codeVerification.rejected, (state, action) => {
            state.errors = action.payload as errorType;
            state.loading = false
            state.message = '';
        })
        .addCase(ChangePassword.rejected, (state, action) => {
            state.errors = action.payload as errorType;
            state.loading = false
            state.message = '';
        })
    }
})

export default recoverSlice.reducer;