import { useEffect } from "react";
import { push } from "redux-first-history";
import { Action, Location } from "history";
import { AUTH } from "@shared/data/constants/routes/route";
import { useAppDispatch } from "@shared/hooks/store/redux";

type LocationState = {
  location?: Location | null | undefined;
  action?: Action | null;
}

const useAuthRedirectEffect = (
  stageNumber: string,
  location?: LocationState[]
) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (location) {
      if (location[0].action === "POP") {
        const stage = sessionStorage.getItem("stage");
        if (stage !== stageNumber) {
          dispatch(push(AUTH));
        }
      }
    }
  }, [dispatch, location, stageNumber]);
};

export default useAuthRedirectEffect;
