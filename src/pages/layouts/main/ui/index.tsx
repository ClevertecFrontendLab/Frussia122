import { SideBar } from "@widgets/sidebar";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { Wrapper, MainScreen } from "./styled";
import { useEffect } from "react";
import { tokenSelector } from "@app/store/reducers/user";
import { useAppSelector } from "@shared/hooks/store/redux";

export const Layout = () => {
  const localToken = localStorage.getItem("token");
  const sessionToken = useAppSelector(tokenSelector);

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const accessToken = queryParams.get("accessToken");
    if (accessToken) {
      localStorage.setItem("token", accessToken);
    }
  }, []);

  const isAuthenticated = localToken || sessionToken;
  return (
    <>
      {isAuthenticated ? (
        <Wrapper>
          <SideBar />
          <MainScreen>
            <Outlet />
          </MainScreen>
        </Wrapper>
      ) : (
        <Navigate to="/auth" replace />
      )}
    </>
  );
};
