import { Navigate, Outlet } from "react-router-dom"
import {
    Wrapper,
    Card,
    Logo
} from './styled';
import background from '../images/Enter page_light.jpg'
import logo from '@shared/images/logo/logo.svg'
import { AuthType } from '@features/AuthType';
import { useSelector } from "react-redux";
import { RootState } from "@app/store/store";
import { Props } from "../models/types";
import { useEffect } from "react";

export const AuthLayout:React.FC<Props> = ({type}) => {
  const location = useSelector((state: RootState) => state.router.location);
  
  const isAuthenticated = localStorage.getItem('accessToken') !== null;

  useEffect(() => {
    if(location?.pathname === '/auth') {
      sessionStorage.removeItem('stage');
    }
  }, [location])
  
  return (
    !isAuthenticated ?  
    <Wrapper backgroundImg={background}>
      <Card>
        {type === 'auth' ? (
          <>
          <Logo src={logo} />
          <AuthType type={location ? location.pathname : ''}/>
          </>
        ) : null} 
        <Outlet />
      </Card>
    </Wrapper>
  : <Navigate to="/" replace />
    
  )
}
