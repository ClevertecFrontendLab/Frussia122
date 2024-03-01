import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_FEEDBACKS } from '@shared/data/constants/api/api';


type Feedback = {
    token: string;
}

export const getFeedbacks = createAsyncThunk<Feedback, {token: string}>(
    'feedbacks/getFeedbacks',
    async ({ token }) => {
        try {
            const accessToken = localStorage.getItem('token') || token;
            await new Promise(resolve => setTimeout(resolve, 200));
            const response = await axios.get(GET_FEEDBACKS, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            
            return response.data;
        
        }
        catch (errors: any) {
            return errors.response.status
        }
    }
)