import {
  Row,
  PassInput,
  ValidateText,
  RepeatPassValidate,
  SaveButton,
} from "./styled";
import { Props } from "../models/types";
import { validatePassword } from "@shared/utils/validateSchema";

export const StageInputs: React.FC<Props> = ({ formState, setFormState }) => {
  const { passwordValid, confirmPasswordValid } = formState;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const { value } = e.target;
    let isValid = true;

    if (name === "password") {
      isValid = validatePassword(value);
    } else if (name === "confirmPassword") {
      isValid = value === formState.password ? true : false;
    }

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
      [`${name}Valid`]: isValid,
    }));
  };

  return (
    <>
      <Row name="password">
        <PassInput
          data-test-id="change-password"
          placeholder="Новый пароль"
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
        <PassInput
          placeholder="Повторите пароль"
          data-test-id="change-confirm-password"
          onChange={(e) => handleChange(e, "confirmPassword")}
        />
        <RepeatPassValidate
          className={
            confirmPasswordValid || !formState.confirmPassword
              ? ""
              : "validateText"
          }
        >
          Пароли не совпадают
        </RepeatPassValidate>
      </Row>
      <Row name="submitButton">
        <SaveButton htmlType="submit" data-test-id="change-submit-button">
          Сохранить
        </SaveButton>
      </Row>
    </>
  );
};
