import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'redux-first-history';
import { AppDispatch } from '@app/store/store';
import { Action, Location } from 'history';
import { AUTH } from '@shared/data/constants/routes/ROUTE';

interface LocationState {
  location?: Location | null | undefined;
  action?: Action | null;
}

const useAuthRedirectEffect = (
  stageNumber: string,
  location?: LocationState[],
) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {

    if(location) {
      if(location[0].action === 'POP') {
        const stage = sessionStorage.getItem('stage');
        if(stage !== stageNumber) {
          dispatch(push(AUTH));
        }
      }
    }


  }, [dispatch, location, stageNumber]);
};

export default useAuthRedirectEffect;