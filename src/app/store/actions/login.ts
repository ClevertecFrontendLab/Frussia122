import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { UserState } from './models/types';
import { LOGIN_URL } from '@shared/Constants/Api/API';

export const loginUser = createAsyncThunk<UserState, { email: string; password: string, checked: boolean }>(
    'user/login',
    async ({ email, password, checked }, { rejectWithValue }) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 200));
            const response = await axios.post(LOGIN_URL, { email, password });

            if(checked) {
                localStorage.setItem('token', `${response.data.accessToken}`)
            } else {
                sessionStorage.setItem('token', `${response.data.accessToken}`);
            }
            
            return response.data;
        
        } catch (error: any) {
            await new Promise(resolve => setTimeout(resolve, 200));

            return rejectWithValue(error.response.data);
        }
    }
);