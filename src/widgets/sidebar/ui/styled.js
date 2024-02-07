import styled from "styled-components";
import { Layout, Menu } from 'antd';
const { Sider } = Layout;



export const SideWrapper = styled(Sider)`
    background: white;
 
    height: 100%;
    z-index: 3;
    height: 100vh;
    
    @media screen and (max-width: 600px) {
        position: fixed !important;
        width: auto !important;
        height: 100%;
        min-width: auto !important;
        max-width: auto !important;
    }


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
export const NavItem = styled(Menu.Item)`

@media screen and (max-width: 600px) {
    svg{
        display: none;
    }
    padding: 0 !important;
   
}
    
`
export const Title = styled.span`
@media screen and (max-width: 600px) {
    margin: 0 !important;

}
`
export const Logo = styled.img`
    margin: 44px 46px 67px 29px;

    @media screen and (max-width: 600px) {
        margin: 16px;
        width: 72px;
    }
`;