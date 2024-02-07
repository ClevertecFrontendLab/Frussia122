import styled from "styled-components";
import { Layout, Menu } from 'antd';
const { Sider } = Layout;



export const SideWrapper = styled(Sider)`
    background: white;
    max-width: 208px;
    height: 100vh;
`
export const Nav = styled(Menu)`
    .ant-menu-item{
        &:hover{
            background-color: white !important;
            color: black;
        }
    }
    .ant-menu-item-selected {
        background-color: white !important;
        color: black;
        &:after{
            display: none;
            background: white;
        }
       
    }
`;



export const Title = styled.span`
   

`
export const Logo = styled.img`
    margin: 44px 46px 67px 29px;
`;