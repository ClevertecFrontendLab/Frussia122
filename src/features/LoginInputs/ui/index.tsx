import { FormStateLogin } from '@pages/auth/ui';
import {
    Row,
    FInput
} from './styled';

import { isValidEmail } from '@shared/utils/validateSchema';

type Props = {
    formState: FormStateLogin,
    setFormState: React.Dispatch<React.SetStateAction<FormStateLogin>>
}

export const LoginInputs:React.FC<Props> = ({formState, setFormState}) => {

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        let isValid = true;
        isValid = isValidEmail(e.target.value)
        console.log(isValid);
        setFormState(prevState => ({
          ...prevState,
          email: e.target.value,
          emailValidate: isValid,
        }))
      }
      const {emailValidate} = formState;
  return (
    <>
    <Row label="e-mail" name="username">
        <FInput 
        placeholder=''
        value={formState.email}
        onChange={(e) => handleEmail(e)}
        required
        className={!emailValidate ? 'validate' : ''}
        />
      </Row>
      <Row name="password">
        <FInput.Password 
        placeholder='Пароль'
        required
        value={formState.password}
        onChange={(e) => setFormState({ ...formState, password: e.target.value})}
        />
      </Row>
    </>
  )
}
