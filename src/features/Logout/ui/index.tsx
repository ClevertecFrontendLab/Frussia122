import {
    Wrapper,
    Icon
} from './styled';
import exit from '../images/Exit.svg'
import { Props } from '../models/types';

export const Logout: React.FC<Props> = ({
    collapsed,
    screenWidth = 0
}) => {
  return (
    <Wrapper collapsed={collapsed}>
       {!collapsed && screenWidth > 600 ? <Icon src={exit} /> : null}
       {collapsed && screenWidth > 600 ? <Icon src={exit} /> : null}
       {collapsed ? "" : "Выход"}
    </Wrapper>
  )
}
