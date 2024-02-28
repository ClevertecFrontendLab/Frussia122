import { SideBar } from "@widgets/Sidebar";
import { Header } from "@widgets/Header";
import { Outlet, Navigate } from "react-router-dom";
import { Wrapper, MainScreen } from "./styled";

export const Layout = () => {
  const localToken = localStorage.getItem('token');
  const sessionToken = sessionStorage.getItem('token');

  const isAuthenticated = localToken || sessionToken  !== null;

  return (
    isAuthenticated ?  
      <Wrapper>
        <SideBar />
        <MainScreen>
          <Header />
          <Outlet />
        </MainScreen>
      </Wrapper> 
    : <Navigate to="/auth" replace />
  );
};