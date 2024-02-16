import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserState } from './models/types';

export const loginUser = createAsyncThunk<UserState, { email: string; password: string }>(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await fetch('https://marathon-api.clevertec.ru/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                const error = await response.json();
                return rejectWithValue(error); 
            }
            const userToken = await response.json();
            return userToken;
        
        } catch (error: any) {
            return (error);
        }
    }
);