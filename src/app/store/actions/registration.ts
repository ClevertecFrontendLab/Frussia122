import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';
import { UserState } from './models/types';
import { ERROR_USER_EXIST, RESULT_ERROR, SUCCESS } from '@shared/Constants/Routes/ROUTE';
import { REGISTRATION_URL } from '@shared/Constants/Api/API';
import axios from 'axios';

export const registerUser = createAsyncThunk<UserState, { email: string; password: string }>(
    'user/register',
    async ({ email, password }, { dispatch  }) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 200));

            const response = await axios.post(REGISTRATION_URL, { email, password });
            localStorage.removeItem('regError');
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('password');

            dispatch(push(SUCCESS));
            return response.data; 
            
        } catch (error: any) {
            const statusCode = error.response.status
            
            if (statusCode === 409) {
                localStorage.removeItem('regError');
                dispatch(push(ERROR_USER_EXIST));
            } else {
                localStorage.setItem('regError', 'true');
                dispatch(push(RESULT_ERROR));
               
            }
            return error.response.data;
        }
    }
);