import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import bigLogo from '../images/logo.svg';
import smallLogo from '../images/fit.svg';
import {
  SideWrapper,
  Logo,
  Nav,
  Title,
  NavItem
} from './styled';
import { Links } from '../constants/Links';
import { SidebarToggle } from '@features/SidebarToggle';
import { Affix } from 'antd';

export const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  const collapsedWidth = screenWidth <= 600 ? "0" : "80";


  return (
    <Affix offsetTop={0}>
      <SideWrapper trigger={null} collapsible collapsedWidth={collapsedWidth} collapsed={collapsed}>
        <Logo src={collapsed && screenWidth > 600 ? smallLogo : bigLogo} />
        <Nav mode={'inline'} defaultSelectedKeys={['1']}>
          {Links.map(item => (
            <NavItem key={item.key}>
            {item.icon}
            <Title>{item.label}</Title>
            </NavItem>
          ))}
        </Nav>
        <SidebarToggle collapsed={collapsed} setCollapsed={setCollapsed}/>
      </SideWrapper>
    </Affix>
      

  );

}
