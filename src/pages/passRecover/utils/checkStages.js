
import { push } from "redux-first-history";
import { AUTH } from "@shared/Constants/Routes/ROUTE";


export const checkStages = (currentLocation, location, dispatch) => {
    if(currentLocation != '/auth/change-password') {
        return;
      }
      
      if (location && location.length > 1) {
        const currentLocation = location[location.length - 1].location?.pathname;
        if (currentLocation !== '/auth/confirm-email') {
          dispatch(push(AUTH));
        }
      } else {
        const stage = sessionStorage.getItem('stage');
        if (stage !== '2') {
          dispatch(push(AUTH));
        }
      }
}