import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { checkEMail } from "../actions/api/checkEmail";
import { UserRecoverPass, errorType } from "../actions/models/types";
import { ChangePassword } from "../actions/api/changePassword";
import { codeVerification } from "../actions/api/codeVerification";
import { RootState } from "../store";

const setErrorState = (state: UserRecoverPass, action: PayloadAction<any>) => {
  state.errors = action.payload as errorType;
  state.message = "";
};


const initialState: UserRecoverPass = {
  email: "",
  errors: {
    statusCode: 200,
    error: "",
    message: "",
  },
  message: "",
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
      .addCase(checkEMail.fulfilled, (state, action) => {
        state.errors = initialState.errors;
        state.email = action.payload.email;
        state.message = action.payload.message;
        sessionStorage.setItem("email", action.payload.email);
        sessionStorage.setItem("stage", "1");
      })
      .addCase(ChangePassword.fulfilled, (state, action) => {
        state.errors = initialState.errors;
        state.message = action.payload.message;
      })
      .addCase(codeVerification.fulfilled, (state, action) => {
        state.errors = initialState.errors;
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

export default recoverSlice.reducer;
