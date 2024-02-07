import {
  Button
} from './styled';
import { Props } from '../models/types';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';


export const SidebarToggle: React.FC<Props> = ({
  collapsed,
  setCollapsed
}) => {

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Button onClick={toggleCollapsed} data-test-id='sider-switch sider-switch-mobile' >
       {collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined /> }
    </Button>
  )
}
