import { createSlice } from "@reduxjs/toolkit";
import { getFeedbacks } from "../actions/api/getFeedbacks";
import { postFeedback } from "../actions/api/postFeedback";
import { FeedBackState } from "./models/type";
import { sortFeedbacks } from "@shared/utils/sortByTime";
import { dateFormatter } from "@shared/utils/dateFormatter";
import { RootState } from "../store";

const initialState: FeedBackState = {
  feedbacks: [],
  currentFeedback: {
    message: "",
    rating: 0,
  },
  errors: {
    postStatusCode: 0,
    getStatusCode: 0,
    error: "",
    message: "",
  },
  loading: false,
};

const feedBackSlice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {
    setRating: (state, action) => {
      state.currentFeedback.rating = action.payload;
    },
    setMessage: (state, action) => {
      state.currentFeedback.message = action.payload;
    },
    clearErrors: (state) => {
      state.errors = initialState.errors;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFeedbacks.pending, (state) => {
        state.loading = true;
      })
      .addCase(postFeedback.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFeedbacks.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          const sortedPayload = sortFeedbacks(action.payload);
          const replacedPayload = dateFormatter(sortedPayload);

          state.feedbacks = replacedPayload;
          state.errors = initialState.errors;
        }
        if (typeof action.payload === "number") {
          state.errors.getStatusCode = action.payload;
        }
        state.loading = false;
      })
      .addCase(postFeedback.fulfilled, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "number") {
          state.errors.postStatusCode = action.payload;
        } else {
          state.errors = initialState.errors;
        }
      })
      .addCase(postFeedback.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getFeedbacks.rejected, (state) => {
        state.loading = false;
      });
  },
});
export const { setRating, setMessage, clearErrors } = feedBackSlice.actions;

export const feedbacksSelector = (state: RootState) => state.feedbacks.feedbacks;
export const loadingSelector = (state: RootState) => state.feedbacks.loading;
export const getErrorSelector = (state: RootState) => state.feedbacks.errors.getStatusCode;
export const postErrorSelector = (state: RootState) => state.feedbacks.errors.postStatusCode;
export const currentMessageSelector = (state: RootState) => state.feedbacks.currentFeedback.message;
export const currentRatingSelector = (state: RootState) => state.feedbacks.currentFeedback.rating;

export default feedBackSlice.reducer;
