import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_FEEDBACKS } from "@shared/data/constants/api/api";
import { setLoader } from "@app/store/reducers/loader";

type Feedback = {
  token: string;
};

export const getFeedbacks = createAsyncThunk<Feedback, { token: string }>(
  "feedbacks/getFeedbacks",
  async ({ token }, { dispatch }) => {
    try {
      dispatch(setLoader(true));
      const accessToken = localStorage.getItem("token") || token;
      
      const response = await axios.get(GET_FEEDBACKS, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      dispatch(setLoader(false));
      return response.data;
    } catch (errors: any) {
      dispatch(setLoader(false));
      return errors.response.status;
    }
  }
);
