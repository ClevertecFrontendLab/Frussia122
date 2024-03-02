import { createAsyncThunk } from "@reduxjs/toolkit";
import { push } from "redux-first-history";
import axios from "axios";
import { REGISTRATION_URL } from "@shared/data/constants/api/api";
import {
  SUCCESS,
  ERROR_USER_EXIST,
  RESULT_ERROR,
} from "@shared/data/constants/routes/route";
import { UserState } from "../models/types";
import { setLoader } from "@app/store/reducers/loader";
import { HTTP_STATUS } from "@shared/data/constants/http/status";

export const registerUser = createAsyncThunk<
  UserState,
  { email: string; password: string }
>("user/register", async ({ email, password }, { dispatch }) => {
  try {
    dispatch(setLoader(true));

    const response = await axios.post(REGISTRATION_URL, { email, password });
    localStorage.removeItem("regError");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");

    dispatch(push(SUCCESS));
    dispatch(setLoader(false));
    return response.data;
  } catch (error: any) {
    const statusCode = error.response.status;

    if (statusCode === HTTP_STATUS.CONFLICT) {
      localStorage.removeItem("regError");
      dispatch(push(ERROR_USER_EXIST));
    } else {
      localStorage.setItem("regError", "true");
      dispatch(push(RESULT_ERROR));
    }
    dispatch(setLoader(false));
    return error.response.data;
  }
});
