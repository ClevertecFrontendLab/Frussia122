import { createAsyncThunk } from "@reduxjs/toolkit";
import { push } from "redux-first-history";
import axios from "axios";
import { CHANGE_PASSWORD_URL } from "@shared/data/constants/api/api";
import {
  SUCCESS_CHANGE_PASSWORD,
} from "@shared/data/constants/routes/route";
import { ChangePasswordType } from "../models/types";
import { setLoader } from "@app/store/reducers/loader";

export const ChangePassword = createAsyncThunk<
  ChangePasswordType,
  { password: string; confirmPassword: string }
>(
  "recover/changePassword",
  async ({ password, confirmPassword }, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoader(true));

      const response = await axios.post(
        CHANGE_PASSWORD_URL,
        { password, confirmPassword },
        { withCredentials: true }
      );

      localStorage.removeItem("recoverError");
      dispatch(push(SUCCESS_CHANGE_PASSWORD));
      dispatch(setLoader(false));
      return response.data;
      
    } catch (error: any) {
      localStorage.setItem("recoverError", "true");
      dispatch(setLoader(false));
      return rejectWithValue(error.response.data);
    }
  }
);
