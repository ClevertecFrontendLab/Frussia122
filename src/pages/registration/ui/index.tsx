import { useEffect, useState } from 'react';
import { FBody, LogIn, LogInWithGoogle, Buttons, } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '@app/store/actions/registration';
import { AppDispatch } from '@app/store/store';
import { FormStateReg } from '../models/type';
import { RegistrationInputs } from '@features/RegistrationInputs';
import { RootState } from '@app/store/store';
import { Loader } from '@shared/loader';

export const Registration = () => {
    const location = useSelector((state: RootState) => state.router.previousLocations);
    const loading = useSelector((state: RootState) => state.user.loading);

    const [formState, setFormState] = useState<FormStateReg>({
        email: '',
        password: '',
        repeatPassword: '',
        emailValid: false,
        passwordValid: false,
        repeatPasswordValid: false,
    });

    useEffect(() => {
        const isError = localStorage.getItem('regError');
        const email = sessionStorage.getItem('email');
        const password = sessionStorage.getItem('password');
      
        if(location && isError) {
         if( location[1].location?.pathname === '/result/error' || isError) {
            if(email && password) {
             fetchData(email, password);
            }
        } 
      }
      }, [location]);


    const dispatch = useDispatch<AppDispatch>();
    
    const handleSubmit = () => {
        const { email, password, repeatPassword } = formState;
        if (password !== repeatPassword) {
            return;
        }
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        fetchData(email, password);      
    };

    const fetchData = async (email: string, password: string) => {
        await dispatch(registerUser({ email, password }));
    }
    const { emailValid, passwordValid, repeatPasswordValid } = formState;
    const formValidate = emailValid && passwordValid && repeatPasswordValid;

    return (
        <FBody onFinish={handleSubmit}>
            {loading ? <Loader /> : <></>}
            <RegistrationInputs formState={formState} setFormState={setFormState}/>
            <Buttons name="login">
                <LogIn htmlType="submit"  data-test-id='registration-submit-button' disabled={!formValidate}>Войти</LogIn>
                <LogInWithGoogle>Регистрация через Google</LogInWithGoogle>
            </Buttons>
        </FBody>
    );
};