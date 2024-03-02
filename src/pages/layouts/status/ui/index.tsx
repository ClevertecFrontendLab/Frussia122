import { locationSelector } from "@app/store/store";
import React, { useEffect } from "react";
import { push } from "redux-first-history";
import { clearUserErrors, userStatusCodeSelector } from "@app/store/reducers/user";
import { clearRecoveryErrors, recoverLoadingSelector, recoverStatusCodeSelector } from "@app/store/reducers/recovery";
import { Wrapper, Card, Content, Title, Description, Button } from "./styled";
import { Props } from "../models/types";
import { ChangePassword } from "@app/store/actions/api/changePassword";
import { checkEMail } from "@app/store/actions/api/checkEmail";
import { Loader } from "@shared/components/loader";
import { AUTH } from "@shared/data/constants/routes/route";
import { useAppDispatch, useAppSelector } from "@shared/hooks/store/redux";
import background from "../images/Enter page_light.jpg";


export const AlertsLayout: React.FC<Props> = ({ alert }) => {
  const needAlerts = useAppSelector(userStatusCodeSelector);
  const needAlertsRecovery = useAppSelector(recoverStatusCodeSelector);
  const location = useAppSelector(locationSelector);
  const loading = useAppSelector(recoverLoadingSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const isRecoverError = localStorage.getItem("recoverError");
    const isRegError = localStorage.getItem("regError");

    if (isRecoverError || isRegError) return;
    else if (
      !needAlerts &&
      !needAlertsRecovery &&
      needAlerts !== 200 &&
      needAlertsRecovery !== 200
    ) {
      dispatch(push(AUTH));
    }
  }, [dispatch, needAlerts, needAlertsRecovery]);

  const handleClick = (link: string) => {
    const email = localStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    const confirmPassword = sessionStorage.getItem("confirmPassword");

    if (location?.pathname === "/result/error-check-email" && email) {
      dispatch(checkEMail({ email }));
    } else if (
      location?.pathname === "/result/error-change-password" &&
      password &&
      confirmPassword
    ) {
      dispatch(ChangePassword({ password, confirmPassword }));
    } else {
      dispatch(clearRecoveryErrors());
      dispatch(clearUserErrors());
      dispatch(push(link));
    }
  };

  return (
    <Wrapper backgroundImg={background}>
      {loading && <Loader />}
      <Card>
        {alert && (
          <Content>
            {alert?.icon}
            <Title>{alert?.title}</Title>
            <Description>{alert?.description}</Description>
            <Button
              data-test-id={alert?.dataTestId}
              onClick={() => handleClick(alert.linkToRedirect)}
            >
              {alert?.buttonText}
            </Button>
          </Content>
        )}
      </Card>
    </Wrapper>
  );
};
