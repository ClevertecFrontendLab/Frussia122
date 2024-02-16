import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';
import { UserState } from './models/types';
import { ERROR_USER_EXIST, RESULT_ERROR, SUCCESS } from '@shared/Constants/Routes/ROUTE';
import { REGISTRATION_URL } from '@shared/Constants/Api/API';
import axios from 'axios';

export const registerUser = createAsyncThunk<UserState, { email: string; password: string }>(
    'user/register',
    async ({ email, password }, { rejectWithValue, dispatch  }) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 200));

            await axios.post(REGISTRATION_URL, { email, password });
            localStorage.removeItem('regError');
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('password');

            dispatch(push(SUCCESS));
            return {} as UserState; 
            
        } catch (error: any) {
            await new Promise(resolve => setTimeout(resolve, 200));

            const { statusCode } = error.response.data;
            if (statusCode === 409) {
                localStorage.removeItem('regError');
                dispatch(push(ERROR_USER_EXIST));
            } else {
                localStorage.setItem('regError', 'true');
                dispatch(push(RESULT_ERROR));
            }
            return rejectWithValue(error.response.data);
        }
    }
);