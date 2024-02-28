import { createSlice} from "@reduxjs/toolkit";
import { checkEMail } from "../Actions/api/checkEmail";
import { UserRecoverPass, errorType } from "../Actions/models/types";
import { ChangePassword } from "../Actions/api/changePassword";
import { codeVerification } from "../Actions/api/codeVerification";


const initialState: UserRecoverPass = {
    email: '',
    errors: {
        statusCode: 0,
        error: '',
        message: '',
    },
    message: '',
    loading: false,
}

const recoverSlice = createSlice({
    name: 'recover',
    initialState: initialState,
    reducers: {
        clearRecoveryErrors: (state) => {
            state.errors = {
              statusCode: 0,
              error: "",
              message: "",
            };
          },
    },
    extraReducers: (builder) => {
        builder
        .addCase(checkEMail.pending, (state) => {
            state.loading = true
        })
        .addCase(codeVerification.pending, (state) => {
            state.loading = true
        })
        .addCase(ChangePassword.pending, (state) => {
            state.loading = true
        })
        .addCase(checkEMail.fulfilled, (state, action) => {

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
        .addCase(checkEMail.rejected, (state, action) => {
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

export const { clearRecoveryErrors, } = recoverSlice.actions;

export default recoverSlice.reducer;