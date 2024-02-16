import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';
import { CodeVerification } from './models/types';

import { 
    AUTH,
    CHANGE_PASSWORD,
    ERROR_CHECK_EMAIL
 } from '@shared/Constants/Routes/ROUTE';

 import { CONFIRM_EMAIL_URL } from '@shared/Constants/Api/API';
import axios from 'axios';

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
            // Add a 0.4 second delay before rejecting the action
            await new Promise(resolve => setTimeout(resolve, 200));

            return rejectWithValue(error.response.data);
        }
    }
);