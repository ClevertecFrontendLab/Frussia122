import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';
import axios from 'axios';
import { UserRecoverPass } from '../models/types';
import { 
    AUTH, 
    CONFIRM_EMAIL, 
    ERROR_CHECK_EMAIL, 
    ERROR_CHECK_EMAIL_NO_EXIST 
} from '@shared/data/constants/routes/route';
import { CHECK_EMAIL } from '@shared/data/constants/api/api';


export const checkEMail = createAsyncThunk<UserRecoverPass, { email: string; }>(
    'recover/checkEMail',
    async ({ email }, { dispatch }) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 200));

            const response = await axios.post(CHECK_EMAIL, { email }, {
                withCredentials: true
            });
            localStorage.setItem('email', email);
            sessionStorage.setItem('stage', '1');
            localStorage.removeItem('recoverError');

            dispatch(push(`${AUTH}/${CONFIRM_EMAIL}`))
            return response.data;
            
        } catch (errors: any) {
            localStorage.setItem('email', email);
            const status = errors.response.status;
            const {message} = errors.response.data;
            if(status === 404 && message === 'Email не найден') {
                dispatch(push(ERROR_CHECK_EMAIL_NO_EXIST))
            } else {
                localStorage.setItem('recoverError', 'true');
                dispatch(push(ERROR_CHECK_EMAIL))
            }
        
            return errors.response.data;
        }
    }
);