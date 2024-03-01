import {
  Wrapper,
  Title,
  RecoveryForm,
} from './styled';
import { FormStateRec } from '../models/types';
import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@app/store/store';
import { ChangePassword } from '@app/store/actions/api/changePassword';
import { StageInputs } from '@features/inputs/recover/ui';
import { Loader } from '@shared/components/loader';
import useAuthRedirectEffect from '../hook';

export const Stage2 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useSelector((state: RootState) => state.router.previousLocations);
  const loading = useSelector((state: RootState) => state.recover.loading);

  const [formState, setFormState] = useState<FormStateRec>({
    password: '',
    confirmPassword: '',
    passwordValid: false,
    confirmPasswordValid: false,
});


useAuthRedirectEffect('2', location);

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
