import {
  Wrapper,
  Title,
  RecoveryForm,
} from './styled';
import { FormStateRec } from '../models/types';
import { useState } from 'react';
import { ChangePassword } from '@app/store/actions/changePassword';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@app/store/store';

import useAuthRedirectEffect from '../hook';
import { AUTH, CONFIRM_EMAIL } from '@shared/Constants/Routes/ROUTE';
import { StageInputs } from '@features/StageInputs/ui';

export const Stage2 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useSelector((state: RootState) => state.router.previousLocations);
  const currentLocation = useSelector((state: RootState) => state.router.location?.pathname);

  const [formState, setFormState] = useState<FormStateRec>({
    password: '',
    confirmPassword: '',
    passwordValid: false,
    confirmPasswordValid: false,
});

useAuthRedirectEffect('/auth/change-password', `${AUTH}/${CONFIRM_EMAIL}`, '2', location, currentLocation);


const handleSubmit = async () => {
  const { password, confirmPassword } = formState;
  console.log(password)
  console.log(confirmPassword)
  if (password !== confirmPassword) {
      return;
  }
  try {
      const { password, confirmPassword } = formState;
      await dispatch(ChangePassword({ password, confirmPassword }));
  } catch (error: any) {
      alert(`Ошибка регистрации: ${error.message}`);
  }
};
 

  return (
    <Wrapper >
      <Title>Восстановление аккаунта</Title>
      <RecoveryForm onFinish={handleSubmit}>
        <StageInputs formState={formState} setFormState={setFormState}/>
      </RecoveryForm>
    </Wrapper>
  )
}
