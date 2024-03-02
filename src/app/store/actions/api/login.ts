import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOGIN_URL } from "@shared/data/constants/api/api";
import { HOMEPAGE, ERROR_LOGIN } from "@shared/data/constants/routes/route";
import axios from "axios";

import { push } from "redux-first-history";
import { UserState } from "../models/types";
import { setLoader } from "@app/store/reducers/loader";

export const loginUser = createAsyncThunk<
  UserState,
  { email: string; password: string; checked: boolean }
>("user/login", async ({ email, password, checked }, { dispatch }) => {
  try {
    dispatch(setLoader(true));
    const response = await axios.post(LOGIN_URL, { email, password });

    if (checked) {
      localStorage.setItem("token", `${response.data.accessToken}`);
    }

    dispatch(push(HOMEPAGE));
    dispatch(setLoader(false));
    return response.data.accessToken;
  } catch (error: any) {
    dispatch(setLoader(false));
    dispatch(push(ERROR_LOGIN));
    return error.response.data;
  }
});
