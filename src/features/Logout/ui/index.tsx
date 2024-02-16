import {
    Wrapper,
    Icon
} from './styled';
import exit from '../images/Exit.svg'
import { Props } from '../models/types';
import { history } from '@app/store/store';

export const Logout: React.FC<Props> = ({
    collapsed,
    screenWidth = 0
}) => {


  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    history.push('/auth');
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
