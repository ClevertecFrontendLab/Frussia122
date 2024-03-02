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
import { recoverStatusCodeSelector } from "@app/store/reducers/recovery";
import { useAppDispatch, useAppSelector } from "@shared/hooks/store/redux";
import { loaderSelector } from "@app/store/reducers/loader";
import { HTTP_STATUS } from "@shared/data/constants/http/status";

export const Stage1 = () => {
  const error = useAppSelector(recoverStatusCodeSelector);
  const location = useAppSelector(prevLocationSelector);
  const loading = useAppSelector(loaderSelector);
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
      <StyledVerificationInput className={error === HTTP_STATUS.OK ? "" : "errorCode"}>
        {error === HTTP_STATUS.OK ? <Attention /> : <ErrorIcon />}
        <Title>
          {error === HTTP_STATUS.OK ? (
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
