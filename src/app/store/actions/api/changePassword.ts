import { createAsyncThunk } from "@reduxjs/toolkit";
import { push } from "redux-first-history";
import axios from "axios";
import { CHANGE_PASSWORD_URL } from "@shared/data/constants/api/api";
import {
  SUCCESS_CHANGE_PASSWORD,
} from "@shared/data/constants/routes/route";
import { ChangePasswordType } from "../models/types";

export const ChangePassword = createAsyncThunk<
  ChangePasswordType,
  { password: string; confirmPassword: string }
>(
  "recover/changePassword",
  async ({ password, confirmPassword }, { rejectWithValue, dispatch }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 200));

      const response = await axios.post(
        CHANGE_PASSWORD_URL,
        { password, confirmPassword },
        { withCredentials: true }
      );

      localStorage.removeItem("recoverError");
      dispatch(push(SUCCESS_CHANGE_PASSWORD));
      return response.data;
    } catch (error: any) {
      localStorage.setItem("recoverError", "true");

      return rejectWithValue(error.response.data);
    }
  }
);
