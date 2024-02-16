import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';
import { ChangePasswordType } from './models/types';

import { 
    ERROR_CHANGE_PASSWORD,
    SUCCESS_CHANGE_PASSWORD
 } from '@shared/Constants/Routes/ROUTE';

 export const ChangePassword = createAsyncThunk<ChangePasswordType, { password: string; confirmPassword: string; }>(
    'recover/changePassword',
    async ({ password, confirmPassword}, { rejectWithValue, dispatch }) => {
        try {
            const response = await fetch('https://marathon-api.clevertec.ru/auth/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
         
                },
                credentials: 'include',
                body: JSON.stringify({ password, confirmPassword }),
            });

            if (!response.ok) {
                const error = await response.json();
                dispatch(push(ERROR_CHANGE_PASSWORD))
                return rejectWithValue(error); 
            }
            dispatch(push(SUCCESS_CHANGE_PASSWORD))
            return response.json();
            
        } catch (error: any) {
            return (error);
        }
    }
);