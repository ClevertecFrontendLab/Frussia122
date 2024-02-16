import { AppDispatch, RootState } from "@app/store/store"
import { useDispatch, useSelector } from "react-redux"
import VerificationInput from "react-verification-input";

import {
  StyledVerificationInput,
  Attention,
  Title,
  Description,
  Hint,
  Email
} from './styled';
import { codeVerification } from "@app/store/actions/codeVerification";
import useAuthRedirectEffect from "../hook";
import { AUTH } from "@shared/Constants/Routes/ROUTE";

export const Stage1 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const email = sessionStorage.getItem('email');
  const error = useSelector((state: RootState) => state.recover.errors?.statusCode);
  const location = useSelector((state: RootState) => state.router.previousLocations);
  const currentLocation = useSelector((state: RootState) => state.router.location?.pathname);
  

 
  useAuthRedirectEffect('/auth/confirm-email', AUTH, '1', location, currentLocation);
  


  const handleVerificationInput = async (code: string) => {
    console.log(code);
    if(code && email) {
      try{
        await dispatch(codeVerification({email, code}))
      } catch (error) {
        console.log(error);
      }
    }
  };
  

  return (
    <StyledVerificationInput className={error != 200 ? 'errorCode' : ''}>
      {error != 200 ? 'Ошибка' : <Attention />}
      <Title>
        {error != 200 ? <>Неверный код.<br/>Введите код для восстановления аккаунта</> 
        :
        <>Введите код <br/>для восстановления аккаунта </>}
      </Title>
      <Description>Мы отправили вам на e-mail <Email>{email}</Email> шестизначный код. Введите его в поле ниже.</Description>
      <VerificationInput
       onComplete={handleVerificationInput} />
      <Hint>Не пришло письмо? Проверьте папку Спам.</Hint>
    </StyledVerificationInput>
  )
}
