import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_FEEDBACKS } from "@shared/data/constants/api/api";
import { setLoader } from "@app/store/reducers/loader";

type Feedback = {
  rating: number;
  message: string;
  token: string;
};

export const postFeedback = createAsyncThunk<
  Feedback,
  { rating: number; message: string; token: string }
>("feedbacks/postFeedbacks", async ({ rating, message, token }, {dispatch}) => {
  try {
    dispatch(setLoader(true));
    const accessToken = localStorage.getItem("token") || token;

    await axios.post(
      GET_FEEDBACKS,
      { message, rating },
      { headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      }
    );
    dispatch(setLoader(false));
  } catch (errors: any) {
    dispatch(setLoader(false));
    return errors.response.status;
  }
});
