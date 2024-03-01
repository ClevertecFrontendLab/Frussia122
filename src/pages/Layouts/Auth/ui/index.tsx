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

export const AuthLayout:React.FC<Props> = ({type}) => {
  const location = useSelector((state: RootState) => state.router.location);
  const sessionToken = useSelector((state: RootState) => state.user.token);
  const isAuthenticated = localStorage.getItem('accessToken') || sessionToken;

 
  return (
    
    !isAuthenticated ?  
    <Wrapper backgroundimg={background}>
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
