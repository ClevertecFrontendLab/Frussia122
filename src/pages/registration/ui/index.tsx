import { useEffect, useState } from "react";
import { FBody, LogIn, LogInWithGoogle, Buttons } from "./styled";
import { prevLocationSelector } from "@app/store/store";
import { FormStateReg } from "../models/type";
import { registerUser } from "@app/store/actions/api/registration";
import { RegistrationInputs } from "@features/inputs/registration";
import { Loader } from "@shared/components/loader";
import { useAppDispatch, useAppSelector } from "@shared/hooks/store/redux";
import { loaderSelector } from "@app/store/reducers/loader";

export const Registration = () => {
  const dispatch = useAppDispatch();
  const location = useAppSelector(prevLocationSelector);
  const loading = useAppSelector(loaderSelector);

  const [formState, setFormState] = useState<FormStateReg>({
    email: "",
    password: "",
    repeatPassword: "",
    emailValid: false,
    passwordValid: false,
    repeatPasswordValid: false,
  });

  useEffect(() => {
    const isError = localStorage.getItem("regError");
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");

    if (location && isError) {
      if (location[1].location?.pathname === "/result/error" || isError) {
        if (email && password) {
          fetchData(email, password);
        }
      }
    }
  }, [location]);

  const handleSubmit = () => {
    const { email, password, repeatPassword } = formState;
    if (password !== repeatPassword) {
      return;
    }
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    fetchData(email, password);
  };

  const fetchData = async (email: string, password: string) => {
    await dispatch(registerUser({ email, password }));
  };
  
  const { emailValid, passwordValid, repeatPasswordValid } = formState;
  const formValidate = emailValid && passwordValid && repeatPasswordValid;

  return (
    <FBody onFinish={handleSubmit}>
      {loading && <Loader />}
      <RegistrationInputs formState={formState} setFormState={setFormState} />
      <Buttons name="login">
        <LogIn
          htmlType="submit"
          data-test-id="registration-submit-button"
          disabled={!formValidate}
        >
          Войти
        </LogIn>
        <LogInWithGoogle>Регистрация через Google</LogInWithGoogle>
      </Buttons>
    </FBody>
  );
};
