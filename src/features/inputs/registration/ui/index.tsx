import { Row, FInput, ValidateText, RepeatPassValidate } from "./styled";
import { isValidEmail, validatePassword } from "@shared/utils/validateSchema";
import { FormStateReg } from "@pages/registration/models/type";

type Props = {
  formState: FormStateReg;
  setFormState: React.Dispatch<React.SetStateAction<FormStateReg>>;
};

export const RegistrationInputs: React.FC<Props> = ({
  formState,
  setFormState,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const { value } = e.target;
    let isValid = true;

    if (name === "email") {
      isValid = isValidEmail(value);
    } else if (name === "password") {
      isValid = validatePassword(value);
    } else if (name === "repeatPassword") {
      isValid = value === formState.password ? true : false;
    }

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
      [`${name}Valid`]: isValid,
    }));
  };

  const { emailValid, passwordValid, repeatPasswordValid } = formState;
  return (
    <>
      <Row name="email">
        <FInput
          prefix={"e-mail:"}
          data-test-id="registration-email"
          placeholder=""
          value={formState.email}
          className={emailValid || !formState.email ? "" : "validate"}
          onChange={(e) => handleChange(e, "email")}
        />
      </Row>
      <Row name="password">
        <FInput.Password
          data-test-id="registration-password"
          placeholder="Пароль"
          value={formState.password}
          className={passwordValid || !formState.password ? "" : "validate"}
          onChange={(e) => handleChange(e, "password")}
        />
        <ValidateText
          className={passwordValid || !formState.password ? "" : "validateText"}
        >
          Пароль не менее 8 символов, с заглавной буквой и цифрой
        </ValidateText>
      </Row>
      <Row name="repeatPassword">
        <FInput.Password
          data-test-id="registration-confirm-password"
          placeholder="Повторите пароль"
          value={formState.repeatPassword}
          onChange={(e) => handleChange(e, "repeatPassword")}
        />
        <RepeatPassValidate
          className={
            repeatPasswordValid || !formState.repeatPassword
              ? ""
              : "validateText"
          }
        >
          Пароли не совпадают
        </RepeatPassValidate>
      </Row>
    </>
  );
};
