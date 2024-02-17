import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { UserState } from './models/types';
import { LOGIN_URL } from '@shared/Constants/Api/API';
import { push } from 'redux-first-history';
import { ERROR_LOGIN, HOMEPAGE } from '@shared/Constants/Routes/ROUTE';

export const loginUser = createAsyncThunk<UserState, { email: string; password: string, checked: boolean }>(
    'user/login',
    async ({ email, password, checked }, {  dispatch }) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 200));
            const response = await axios.post(LOGIN_URL, { email, password });

            if(checked) {
                localStorage.setItem('token', `${response.data.accessToken}`)
            } else {
                sessionStorage.setItem('token', `${response.data.accessToken}`);
            }
            
            dispatch(push(HOMEPAGE));
            return response.data;
        
        } catch (error: any) {
            dispatch(push(ERROR_LOGIN))
            return error.response.data
        }
    }
);