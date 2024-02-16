import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import { UserRecoverPass } from './models/types';
import { 
    ERROR_CHECK_EMAIL_NO_EXIST,
    ERROR_CHECK_EMAIL,
    CONFIRM_EMAIL,
    AUTH,

 } from '@shared/Constants/Routes/ROUTE';

export const recoverPassword = createAsyncThunk<UserRecoverPass, { email: string; }>(
    'recover/recoverPassword',
    async ({ email }, { rejectWithValue, dispatch }) => {
        try {
            console.log()
            const response = await fetch('https://marathon-api.clevertec.ru/auth/check-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const error = await response.json();
                if(response.status === 404 && error.message === 'Email не найден') {
                    dispatch(push(ERROR_CHECK_EMAIL_NO_EXIST))
                } else {
                    dispatch(push(ERROR_CHECK_EMAIL))
                }
                
                return rejectWithValue(error); 
            }
            sessionStorage.setItem('stage', '1');
            dispatch(push(`${AUTH}/${CONFIRM_EMAIL}`))
            return response.json();
            
        } catch (error: any) {
            return (error);
        }
    }
);