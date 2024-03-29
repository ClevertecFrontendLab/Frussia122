import { createAsyncThunk } from "@reduxjs/toolkit";
import { push } from "redux-first-history";
import axios from "axios";
import { CONFIRM_EMAIL_URL } from "@shared/data/constants/api/api";
import { AUTH, CHANGE_PASSWORD } from "@shared/data/constants/routes/route";
import { CodeVerification } from "../models/types";
import { setLoader } from "@app/store/reducers/loader";

export const codeVerification = createAsyncThunk<
  CodeVerification,
  { email: string; code: string }
>(
  "recover/codeVerification",
  async ({ email, code }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoader(true));

      const response = await axios.post(
        CONFIRM_EMAIL_URL,
        { email, code },
        { withCredentials: true }
      );

      dispatch(push(`${AUTH}/${CHANGE_PASSWORD}`));
      sessionStorage.setItem("stage", "2");
      dispatch(setLoader(false));
      return response.data;
    } catch (error: any) {
      dispatch(setLoader(false));
      return rejectWithValue(error.response.data);
    }
  }
);
