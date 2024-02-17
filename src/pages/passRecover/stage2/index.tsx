import {
  Wrapper,
  Title,
  RecoveryForm,
} from './styled';
import { FormStateRec } from '../models/types';
import {  useState } from 'react';
import { ChangePassword } from '@app/store/actions/changePassword';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@app/store/store';

import useAuthRedirectEffect from '../hook';
import { AUTH, CONFIRM_EMAIL } from '@shared/Constants/Routes/ROUTE';
import { StageInputs } from '@features/StageInputs/ui';
import { Loader } from '@shared/loader';

export const Stage2 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useSelector((state: RootState) => state.router.previousLocations);
  const currentLocation = useSelector((state: RootState) => state.router.location?.pathname);
  const loading = useSelector((state: RootState) => state.recover.loading);

  const [formState, setFormState] = useState<FormStateRec>({
    password: '',
    confirmPassword: '',
    passwordValid: false,
    confirmPasswordValid: false,
});


useAuthRedirectEffect('/auth/change-password', `${AUTH}/${CONFIRM_EMAIL}`, '2', '/result/error-change-password', location, currentLocation);

const fetchData = async (password: string, confirmPassword: string) => {
    await dispatch(ChangePassword({ password, confirmPassword }));

};


const handleSubmit = () => {
  const { password, confirmPassword } = formState;
  sessionStorage.setItem('password', password);
  sessionStorage.setItem('confirmPassword', confirmPassword);
  if (password !== confirmPassword) {
      return;
  }
  fetchData(password, confirmPassword);
};
 

  return (
    <Wrapper >
      {loading ? <Loader /> : <></>}
      <Title>Восстановление аккаунта</Title>
      <RecoveryForm onFinish={() => handleSubmit()}>
        <StageInputs formState={formState} setFormState={setFormState}/>
      </RecoveryForm>
    </Wrapper>
  )
}
