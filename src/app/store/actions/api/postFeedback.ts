import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_FEEDBACKS } from '@shared/data/constants/api/api';

type Feedback = {
    rating: number;
    message: string;
    token: string;
}

export const postFeedback = createAsyncThunk<Feedback , {rating: number, message: string, token: string}>(
    'feedbacks/postFeedbacks',
    async ({ rating, message, token }) => {
        try {
            const accessToken = localStorage.getItem('token') || token;
            await new Promise(resolve => setTimeout(resolve, 200));
            await axios.post(GET_FEEDBACKS, {message, rating}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            
        
        }
        catch (errors: any) {
            return errors.response.status
        }
    }
)