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
import { checkEMail } from '@app/store/actions/checkEmail';
import { Loader } from '@shared/loader';

export interface FormStateLogin {
  email: string;
  password: string;
  emailValidate: boolean;

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
  });
 
  useEffect(() => {
    if(ErrorStatusCode && ErrorStatusCode !== 200) {
      dispatch(push(ERROR_LOGIN))
    }
  }, [dispatch, ErrorStatusCode])


  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  const handleSubmit = async () => {
   const {email, password, emailValidate} = formState;

   if(email && password && emailValidate) {
      const { email, password } = formState;
      await dispatch(loginUser({email, password, checked}));
      dispatch(push(HOMEPAGE))
   }
  }

  const onClick = async () => {
    const {email, emailValidate} = formState;
    if(email && emailValidate) {
        const {email} = formState;
        await dispatch(checkEMail({email}));
    }
  }


  return (
    <FBody onFinish={handleSubmit}>
      {loading || loading2 ? <Loader /> : <></>}
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
