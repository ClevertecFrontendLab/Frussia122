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
import { codeVerification } from "@app/store/actions/codeVerification";
import useAuthRedirectEffect from "../hook";
import { AUTH } from "@shared/Constants/Routes/ROUTE";
import { Loader } from "@shared/loader";

export const Stage1 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const email = sessionStorage.getItem('email');
  const error = useSelector((state: RootState) => state.recover.errors?.statusCode);
  const location = useSelector((state: RootState) => state.router.previousLocations);
  const currentLocation = useSelector((state: RootState) => state.router.location?.pathname);
  const loading = useSelector((state: RootState) => state.recover.loading);


 

  useAuthRedirectEffect('/auth/confirm-email', AUTH, '1', '', location, currentLocation);
  
  const handleVerificationInput = async (code: string) => {

    if(code && email) {
        await dispatch(codeVerification({email, code}))
    }
  };
  console.log(loading);
  
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
       onComplete={handleVerificationInput} />
      <Hint>Не пришло письмо? Проверьте папку Спам.</Hint>
    </StyledVerificationInput>
   </>
  )
}
