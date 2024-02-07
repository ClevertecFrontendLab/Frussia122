import React, { useState } from 'react';
import 'antd/dist/antd.css';
import bigLogo from '../images/logo.svg';
import smallLogo from '../images/fit.svg';
import {
  SideWrapper,
  Logo,
  Nav,
  Title
} from './styled';
import { Links } from '../constants/Links';
import { SidebarToggle } from '@features/SidebarToggle';

export const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
      <SideWrapper trigger={null} collapsible collapsed={collapsed}>
        <Logo src={collapsed ? smallLogo : bigLogo} />
        <Nav mode={'inline'} defaultSelectedKeys={['1']}>
          {Links.map(item => (
            <Nav.Item key={item.key}>
             {item.icon}
             <Title>{item.label}</Title>
            </Nav.Item>
          ))}
        </Nav>
        <SidebarToggle collapsed={collapsed} setCollapsed={setCollapsed}/>
      </SideWrapper>

  );

}
