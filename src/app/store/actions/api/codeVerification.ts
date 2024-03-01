import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';
import axios from 'axios';
import { CONFIRM_EMAIL_URL } from '@shared/data/constants/api/API';
import { AUTH, CHANGE_PASSWORD } from '@shared/data/constants/routes/ROUTE';
import { CodeVerification } from '../models/types';

export const codeVerification = createAsyncThunk<CodeVerification, { email: string; code: string }>(
    'recover/codeVerification',
    async ({ email, code }, {dispatch, rejectWithValue}) => {
        try {
         
            await new Promise(resolve => setTimeout(resolve, 200));

            const response = await axios.post(CONFIRM_EMAIL_URL, { email, code }, {
                withCredentials: true
            });
            
            dispatch(push(`${AUTH}/${CHANGE_PASSWORD}`));
            sessionStorage.setItem('stage', '2');

            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);