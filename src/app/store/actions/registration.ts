import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';
import { UserState } from './models/types';
import { ERROR_USER_EXIST, RESULT_ERROR, SUCCESS } from '@shared/Constants/Routes/ROUTE';


export const registerUser = createAsyncThunk<UserState, { email: string; password: string }>(
    'user/register',
    async ({ email, password }, { rejectWithValue, dispatch  }) => {
        try {
            const response = await fetch('https://marathon-api.clevertec.ru/auth/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const error = await response.json();
                if(response.status === 409) {
                    dispatch(push(ERROR_USER_EXIST))
                } else {
                    dispatch(push(RESULT_ERROR))
                }
                return rejectWithValue(error); 
            }
            dispatch(push(SUCCESS))
            
        } catch (error: any) {
            return (error);
        }
    }
);