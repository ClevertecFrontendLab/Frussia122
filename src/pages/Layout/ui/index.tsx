import { Navigate, Outlet } from "react-router-dom"
import { SideBar } from "@widgets/sidebar"
import {
    Wrapper,
    MainScreen
} from './styled';
import { Header } from "@widgets/header";
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