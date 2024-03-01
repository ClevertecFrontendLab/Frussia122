import {
    Wrapper,
    Icon
} from './styled';
import exit from '../images/Exit.svg'
import { Props } from '../models/types';
import { push } from 'redux-first-history';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@app/store/store';
import { AUTH } from '@shared/data/constants/routes/ROUTE';

export const Logout: React.FC<Props> = ({
    collapsed,
    screenWidth = 0
}) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    dispatch(push(AUTH));
  }
  return (
    <Wrapper 
    collapsed={collapsed}
    onClick={handleLogout}
    >
       {!collapsed && screenWidth > 600 ? <Icon src={exit} /> : null}
       {collapsed && screenWidth > 600 ? <Icon src={exit} /> : null}
       {collapsed ? "" : "Выход"}
    </Wrapper>
  )
}
