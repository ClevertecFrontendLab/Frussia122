import { prevLocationSelector } from "@app/store/store";
import VerificationInput from "react-verification-input";
import {
  StyledVerificationInput,
  Attention,
  Title,
  Description,
  Hint,
  Email,
  ErrorIcon,
} from "./styled";
import useAuthRedirectEffect from "../hook";
import { useState } from "react";
import { codeVerification } from "@app/store/actions/api/codeVerification";
import { Loader } from "@shared/components/loader";
import { recoverLoadingSelector, recoverStatusCodeSelector } from "@app/store/reducers/recovery";
import { useAppDispatch, useAppSelector } from "@shared/hooks/store/redux";

export const Stage1 = () => {
  const error = useAppSelector(recoverStatusCodeSelector);
  const location = useAppSelector(prevLocationSelector);
  const loading = useAppSelector(recoverLoadingSelector);
  const [verificationCode, setVerificationCode] = useState("");
  const email = localStorage.getItem("email");
  const dispatch = useAppDispatch();

  useAuthRedirectEffect("1", location);

  const handleVerificationInput = (code: string) => {
    if (error) {
      setVerificationCode("");
    }
    if (code && email) {
      dispatch(codeVerification({ email, code }));
    }
  };

  return (
    <>
      {loading && <Loader />}
      <StyledVerificationInput className={error === 200 ? "" : "errorCode"}>
        {error === 200 ? <Attention /> : <ErrorIcon />}
        <Title>
          {error === 200 ? (
            <>
              Введите код <br /> для восстановления аккаунта
            </>
          ) : (
            <>
              Неверный код. Введите код <br /> для восстановления аккаунта
            </>
          )}
        </Title>
        <Description>
          Мы отправили вам на e-mail <Email>{email}</Email> шестизначный код.
          Введите его в поле ниже.
        </Description>
        <VerificationInput
          value={verificationCode}
          onChange={setVerificationCode}
          onComplete={handleVerificationInput}
          inputProps={{ "data-test-id": "verification-input" }}
        />
        <Hint>Не пришло письмо? Проверьте папку Спам.</Hint>
      </StyledVerificationInput>
    </>
  );
};
