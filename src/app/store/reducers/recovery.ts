import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { checkEMail } from "../actions/api/checkEmail";
import { UserRecoverPass, errorType } from "../actions/models/types";
import { ChangePassword } from "../actions/api/changePassword";
import { codeVerification } from "../actions/api/codeVerification";
import { RootState } from "../store";

const setErrorState = (state: UserRecoverPass, action: PayloadAction<any>) => {
  state.errors = action.payload as errorType;
  state.loading = false;
  state.message = "";
};

const setFulfilledState = (
  state: UserRecoverPass,
) => {
  state.errors = initialState.errors;
  state.loading = false;
};

const initialState: UserRecoverPass = {
  email: "",
  errors: {
    statusCode: 200,
    error: "",
    message: "",
  },
  message: "",
  loading: false,
};

const recoverSlice = createSlice({
  name: "recover",
  initialState: initialState,
  reducers: {
    clearRecoveryErrors: (state) => {
      state.errors = initialState.errors;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkEMail.pending, (state) => {
        state.loading = true;
      })
      .addCase(codeVerification.pending, (state) => {
        state.loading = true;
      })
      .addCase(ChangePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkEMail.fulfilled, (state, action) => {
        setFulfilledState(state);
        state.email = action.payload.email;
        state.message = action.payload.message;
        sessionStorage.setItem("email", action.payload.email);
        sessionStorage.setItem("stage", "1");
      })
      .addCase(ChangePassword.fulfilled, (state, action) => {
        setFulfilledState(state);
        state.message = action.payload.message;
      })
      .addCase(codeVerification.fulfilled, (state, action) => {
        setFulfilledState(state);
        state.email = action.payload.email;
        sessionStorage.setItem("stage", "2");
      })
      .addCase(checkEMail.rejected, (state, action) => {
        setErrorState(state, action);
      })
      .addCase(codeVerification.rejected, (state, action) => {
        setErrorState(state, action);
      })
      .addCase(ChangePassword.rejected, (state, action) => {
        setErrorState(state, action);
      });
  },
});

export const { clearRecoveryErrors } = recoverSlice.actions;
export const recoverStatusCodeSelector = (state: RootState) => state.recover.errors.statusCode;
export const recoverLoadingSelector = (state: RootState) => state.recover.loading;

export default recoverSlice.reducer;
