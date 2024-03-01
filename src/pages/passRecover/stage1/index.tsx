import { AppDispatch, RootState } from "@app/store/store"
import { useDispatch, useSelector } from "react-redux"
import VerificationInput from "react-verification-input";

import {
  StyledVerificationInput,
  Attention,
  Title,
  Description,
  Hint,
  Email,
  ErrorIcon
} from './styled';
import useAuthRedirectEffect from "../hook";
import { useState } from "react";
import { codeVerification } from "@app/store/actions/api/codeVerification";
import { Loader } from "@shared/components/Loader";

export const Stage1 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const email = localStorage.getItem('email');
  const error = useSelector((state: RootState) => state.recover.errors?.statusCode);
  const location = useSelector((state: RootState) => state.router.previousLocations);
  const loading = useSelector((state: RootState) => state.recover.loading);
  const [verificationCode, setVerificationCode] = useState(''); 

  useAuthRedirectEffect('1',  location);
  
  const handleVerificationInput = (code: string) => {
    if(error) {
      setVerificationCode('');
    }
    if(code && email) {
        dispatch(codeVerification({email, code}))
    }
  };

  return (
   <>
    {loading ? <Loader /> : <></>}
    <StyledVerificationInput className={error === 200 ? '' : 'errorCode'}>
      {error === 200  ? <Attention /> : <ErrorIcon />}
      <Title>
        {error === 200 ? <>Введите код <br/>для восстановления аккаунта </>
        : <>Неверный код. Введите код <br/> для восстановления аккаунта</> 
        }
      </Title>
      <Description>Мы отправили вам на e-mail <Email>{email}</Email> шестизначный код. Введите его в поле ниже.</Description>
      <VerificationInput
        value={verificationCode}
        onChange={setVerificationCode}
        onComplete={handleVerificationInput} 
        inputProps={{ 'data-test-id': 'verification-input' }}
      />
      <Hint>Не пришло письмо? Проверьте папку Спам.</Hint>
    </StyledVerificationInput>
   </>
  )
}
