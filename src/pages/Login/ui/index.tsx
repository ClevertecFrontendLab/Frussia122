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
import { push } from 'redux-first-history';
import { checkEMail } from '@app/store/actions/api/checkEmail';
import { loginUser } from '@app/store/actions/api/login';
import { LoginInputs } from '@features/inputs/login';
import { Loader } from '@shared/components/loader';
import { ERROR_LOGIN } from '@shared/data/constants/routes/ROUTE';
import { GOOGLE_AUTH_URL } from '@shared/data/constants/api/API';


export interface FormStateLogin {
  email: string;
  password: string;
  emailValidate: boolean;
  passwordValidate: boolean;

}
export const Auth = () => {

  const [checked, setChecked] = useState(false);
  const loading = useSelector((state: RootState) => state.recover.loading);
  const loading2 = useSelector((state: RootState) => state.user.loading);

  const dispatch = useDispatch<AppDispatch>();
  const ErrorStatusCode = useSelector((state: RootState) => state.user.errors.statusCode);

  const [formState, setFormState] = useState<FormStateLogin>({
    email: '',
    password: '',
    emailValidate: true,
    passwordValidate: true,
  });

  useEffect(() => {
    if(ErrorStatusCode && ErrorStatusCode !== 200) {
      dispatch(push(ERROR_LOGIN))
    }
  }, [dispatch, ErrorStatusCode])



  const fetchUser = async (email: string, password: string) => {
    await dispatch(loginUser({email, password, checked}));
  }

  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  const handleSubmit = () => {
   const {email, password, emailValidate, passwordValidate} = formState;
   if(email && password && emailValidate && passwordValidate) {
    
    fetchUser(email, password)
      
   }
  }

  const onClick = async () => {
    const {email, emailValidate} = formState;
    
    if(email && emailValidate) {
        const {email} = formState;
        await dispatch(checkEMail({email}));
    }
  }

  const handleGoogleLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };


  return (
    <FBody onFinish={handleSubmit}>
      {loading || loading2 ? <Loader /> : <></>}
      <LoginInputs formState={formState} setFormState={setFormState} />
      <Buttons name="login">
        <CheckArea>
          <CheckBox onChange={onChange} data-test-id='login-remember'>Запомнить меня?</CheckBox>
          <ForgetPass onClick={onClick} data-test-id='login-forgot-button'>Забыли пароль?</ForgetPass>
        </CheckArea>
        <LogIn htmlType="submit" data-test-id='login-submit-button'>Войти</LogIn>
        <LogInWithGoogle onClick={handleGoogleLogin}>Вход через Google</LogInWithGoogle>
      </Buttons>
    </FBody>
  )
}
