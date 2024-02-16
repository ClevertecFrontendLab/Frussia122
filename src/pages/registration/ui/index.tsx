import { useState } from 'react';
import { FBody, LogIn, LogInWithGoogle, Buttons, } from './styled';
import { useDispatch } from 'react-redux';
import { registerUser } from '@app/store/actions/registration';
import { AppDispatch } from '@app/store/store';
import { FormStateReg } from '../models/type';
import { RegistrationInputs } from '@features/RegistrationInputs';

export const Registration = () => {
    const [formState, setFormState] = useState<FormStateReg>({
        email: '',
        password: '',
        repeatPassword: '',
        emailValid: false,
        passwordValid: false,
        repeatPasswordValid: false,
    });

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = async () => {
        const { password, repeatPassword } = formState;
        if (password !== repeatPassword) {
            return;
        }
        try {
            const { email, password } = formState;
            await dispatch(registerUser({ email, password }));
        } catch (error: any) {
            alert(`Ошибка регистрации: ${error.message}`);
        }
    };

    const { emailValid, passwordValid, repeatPasswordValid } = formState;
    const formValidate = emailValid && passwordValid && repeatPasswordValid;

    return (
        <FBody onFinish={handleSubmit}>
            <RegistrationInputs formState={formState} setFormState={setFormState}/>
            <Buttons name="login">
                <LogIn htmlType="submit" disabled={!formValidate}>Войти</LogIn>
                <LogInWithGoogle>Регистрация через Google</LogInWithGoogle>
            </Buttons>
        </FBody>
    );
};