import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';
import axios from 'axios';

import { UserRecoverPass } from './models/types';
import { 
    ERROR_CHECK_EMAIL_NO_EXIST,
    ERROR_CHECK_EMAIL,
    CONFIRM_EMAIL,
    AUTH,

 } from '@shared/Constants/Routes/ROUTE';
import { CHECK_EMAIL } from '@shared/Constants/Api/API';

export const checkEMail = createAsyncThunk<UserRecoverPass, { email: string; }>(
    'recover/checkEMail',
    async ({ email }, { dispatch,rejectWithValue }) => {
        try {
            const response = await axios.post(CHECK_EMAIL, { email });

            sessionStorage.setItem('stage', '1');
            dispatch(push(`${AUTH}/${CONFIRM_EMAIL}`))
            return response.data;
            
        } catch (errors: any) {

            const {statusCode, error, message} = errors.response.data;
            if(statusCode === 404 && message === 'Email не найден') {
                dispatch(push(ERROR_CHECK_EMAIL_NO_EXIST))
            } else {
                dispatch(push(ERROR_CHECK_EMAIL))
            }
        
            return rejectWithValue(errors.response.data);
        }
    }
);