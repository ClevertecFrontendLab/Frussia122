import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
import { AppDispatch } from '@app/store/store';
import { AUTH } from '@shared/Constants/Routes/ROUTE';
import { Action, Location } from 'history';

interface LocationState {
  location?: Location | null | undefined;
  action?: Action | null;
}

const useAuthRedirectEffect = (
  expectedLocation: string,
  expectedPrevLocation: string,
  stageNumber: string,
  location?: LocationState[],
  currentLocation?: string
) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    
    if (!currentLocation || !location) {
      return;
    }

    if (currentLocation !== expectedLocation) {
      return;
    }

    if (location.length > 1) {
      const currentLocationPath = location[location.length - 1].location?.pathname;
      if (currentLocationPath !== expectedPrevLocation) {
        dispatch(push(AUTH));
      }
    } else {
      const stage = sessionStorage.getItem('stage');
      if (stage !== stageNumber) {
        dispatch(push(AUTH));
      }
    }
  }, [dispatch, location, currentLocation, expectedLocation, expectedPrevLocation, stageNumber]);
};

export default useAuthRedirectEffect;