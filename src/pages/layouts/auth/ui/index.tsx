import { Navigate, Outlet } from "react-router-dom";
import { Wrapper, Card, Logo } from "./styled";
import { locationSelector } from "@app/store/store";
import { Props } from "../models/types";
import { AuthTabs } from "@features/authTabs";
import { useAppSelector } from "@shared/hooks/store/redux";
import { tokenSelector } from "@app/store/reducers/user";
import background from "../images/Enter page_light.jpg";
import logo from "@shared/images/logo/logo.svg";

export const AuthLayout: React.FC<Props> = ({ type }) => {
  const location = useAppSelector(locationSelector);
  const sessionToken = useAppSelector(tokenSelector);
  const isAuthenticated = localStorage.getItem("accessToken") || sessionToken;

  return !isAuthenticated ? (
    <Wrapper backgroundimg={background}>
      <Card>
        {type === "auth" ? (
          <>
            <Logo src={logo} />
            <AuthTabs type={location ? location.pathname : ""} />
          </>
        ) : null}
        <Outlet />
      </Card>
    </Wrapper>
  ) : (
    <Navigate to="/" replace />
  );
};
