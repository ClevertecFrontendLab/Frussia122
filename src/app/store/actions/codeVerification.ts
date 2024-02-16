import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';
import { CodeVerification } from './models/types';

import { 
    AUTH,
    CHANGE_PASSWORD,
    ERROR_CHECK_EMAIL
 } from '@shared/Constants/Routes/ROUTE';

export const codeVerification = createAsyncThunk<CodeVerification, { email: string; code: string }>(
    'recover/codeVerification',
    async ({ email, code }, { rejectWithValue, dispatch }) => {
        try {
            console.log()
            const response = await fetch('https://marathon-api.clevertec.ru/auth/confirm-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email, code }),
            });

            if (!response.ok) {
                const error = await response.json();

                return rejectWithValue(error); 
            }
            dispatch(push(`${AUTH}/${CHANGE_PASSWORD}`))
            sessionStorage.setItem('stage', '2');
            return response.json();
            
        } catch (error: any) {
            return (error);
        }
    }
);