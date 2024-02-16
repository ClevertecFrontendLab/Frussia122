import { useEffect, useState } from 'react';
import {
    FBody,
    LogIn,
    LogInWithGoogle,
    Buttons,
    CheckArea,
    CheckBox,
    ForgetPass
  } from './styled';
  import type { CheckboxChangeEvent } from 'antd/es/checkbox';
  import { AppDispatch, RootState } from '@app/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@app/store/actions/login';
import { push } from 'redux-first-history';
import { LoginInputs } from '@features/LoginInputs';
import { ERROR_LOGIN, HOMEPAGE } from '@shared/Constants/Routes/ROUTE';
import { recoverPassword } from '@app/store/actions/recoverPassword';

export interface FormStateLogin {
  email: string;
  password: string;
  emailValidate: boolean;

}
export const Auth = () => {

  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const ErrorStatusCode = useSelector((state: RootState) => state.user.errors.statusCode);
 
  const [formState, setFormState] = useState<FormStateLogin>({
    email: '',
    password: '',
    emailValidate: true,
  });
 
  

  useEffect(() => {
    if(ErrorStatusCode) {
      dispatch(push(ERROR_LOGIN))
    }
  }, [dispatch, ErrorStatusCode])
 
  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  const handleSubmit = async () => {
   const {email, password, emailValidate} = formState;

   if(email && password && emailValidate) {
    try {
      const { email, password } = formState;
      await dispatch(loginUser({email, password}));
      dispatch(push(HOMEPAGE))
    } catch (error: any) {
      console.log('asd');
    }
   }
  }

  const onClick = async () => {
    const {email, emailValidate} = formState;

    if(email && emailValidate) {
      console.log('asd');
      try{
        const {email} = formState;
        await dispatch(recoverPassword({email}));
      } catch (error: any) {
        console.log(".")
      }

    }
  }
  return (
    <FBody onFinish={handleSubmit}>
      <LoginInputs formState={formState} setFormState={setFormState} />
      <Buttons name="login">
        <CheckArea>
          <CheckBox onChange={onChange}>Запомнить меня?</CheckBox>
          <ForgetPass onClick={onClick}>Забыли пароль?</ForgetPass>
        </CheckArea>
        <LogIn htmlType="submit">Войти</LogIn>
        <LogInWithGoogle>Вход через Google</LogInWithGoogle>
      </Buttons>
    </FBody>
  )
}
