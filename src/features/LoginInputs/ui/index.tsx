import { FormStateLogin } from '@pages/auth/ui';
import {
    Row,
    FInput
} from './styled';

import { isValidEmail, validatePassword } from '@shared/utils/validateSchema';

type Props = {
    formState: FormStateLogin,
    setFormState: React.Dispatch<React.SetStateAction<FormStateLogin>>
}

export const LoginInputs:React.FC<Props> = ({formState, setFormState}) => {

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        let isValid = true;
        isValid = isValidEmail(e.target.value)

        setFormState(prevState => ({
          ...prevState,
          email: e.target.value,
          emailValidate: isValid,
        }))
      }

      const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {

        let isValid = true;
        isValid = validatePassword(e.target.value);

        setFormState(prevState => ({
          ...prevState,
          password: e.target.value,
          passwordValidate: isValid,
        }))
      }
      const {emailValidate} = formState;
  return (
    <>
    <Row label="e-mail" name="username">
        <FInput 
        data-test-id='login-email'
        placeholder=''
        value={formState.email}
        onChange={(e) => handleEmail(e)}
        required
        className={!emailValidate ? 'validate' : ''}
        />
      </Row>
      <Row name="password">
        <FInput.Password 
        data-test-id='login-password'
        placeholder='Пароль'
        value={formState.password}
        onChange={(e) => handlePassword(e)}
        />
      </Row>
    </>
  )
}
