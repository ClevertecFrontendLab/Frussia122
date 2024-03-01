import { SideBar } from "@widgets/Sidebar";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { Wrapper, MainScreen } from "./styled";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@app/store/store";

export const Layout = () => {
  const localToken = localStorage.getItem('token');
  const sessionToken = useSelector((state: RootState) => state.user.token);

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const accessToken = queryParams.get('accessToken');
    if(accessToken) {
      localStorage.setItem('token', accessToken);
    }
  },[])

  

  const isAuthenticated = localToken || sessionToken;
  return (
    <>
     
     {isAuthenticated ?  
      <Wrapper >
        <SideBar />
        <MainScreen>
          <Outlet />
        </MainScreen>
      </Wrapper> 
    : <Navigate to="/auth" replace />}
    </>
  );
};