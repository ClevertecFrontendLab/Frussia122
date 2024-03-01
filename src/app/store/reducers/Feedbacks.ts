import { createSlice } from "@reduxjs/toolkit";
import { getFeedbacks } from "../actions/api/getFeedbacks";
import { postFeedback } from "../actions/api/postFeedback";
import { FeedBackState } from "./models/type";


const initialState: FeedBackState = {
    feedbacks: [],
    currentFeedback: {
        message: '',
        rating: 0,
    },
    errors: {
        postStatusCode: 0,
        getStatusCode: 0,
        error: '',
        message: '',
    },
    loading: false,
}

const options: any = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
}

const feedBackSlice = createSlice({
    name: 'feedbacks',
    initialState,
    reducers: {
        setRating: (state, action) => {
            state.currentFeedback.rating = action.payload;
        },
        setMessage: (state, action) => {
            state.currentFeedback.message = action.payload;
        },
        clearErrors: (state) => {
            state.errors = {
                getStatusCode: 0,
                postStatusCode: 0,
                error: '',
                message: '',
            }
        }
    },
    extraReducers: (builder) => {
    builder
        .addCase(getFeedbacks.pending, (state) => {
            state.loading = true;
        })
        .addCase(postFeedback.pending, (state) => {
            state.loading = true;
        })
        .addCase(getFeedbacks.fulfilled, (state, action ) => {
            if(Array.isArray(action.payload)) {
                const sortedPayload = action.payload.sort((a, b) => {
                    const dateA = new Date(a.date).getTime();
                    const dateB = new Date(b.date).getTime();
                    return dateB - dateA;
                  });
                

                state.feedbacks = sortedPayload.map(item => ({
                    ...item,
                    createdAt: new Date(item.createdAt).toLocaleString('ru', options)
                }));


                state.errors = {
                    getStatusCode: 0,
                    postStatusCode: 0,
                    error: '',
                    message: '',
                }
            } else {
                state.errors.getStatusCode = action.payload
            }
            state.loading = false;
        })
        .addCase(postFeedback.fulfilled, (state, action ) => {
            state.loading = false;
            if(typeof action.payload === 'number') {
                state.errors.postStatusCode = action.payload;
            } else {
                state.errors = {
                    postStatusCode: 0,
                    getStatusCode: 0,
                    error: '',
                    message: '',
                }
            }
        })
        .addCase(postFeedback.rejected, (state ) => {
            state.loading = false;
        })
        .addCase(getFeedbacks.rejected, (state ) => {
            state.loading = false;
        })
    }

})
export const { setRating, setMessage, clearErrors } = feedBackSlice.actions;

export default feedBackSlice.reducer;