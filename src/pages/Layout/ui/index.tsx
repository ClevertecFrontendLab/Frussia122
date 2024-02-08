import { Outlet } from "react-router-dom"
import { SideBar } from "@widgets/sidebar"
import {
    Wrapper,
    MainScreen
} from './styled';
import { Header } from "@widgets/header";
export const Layout = () => {
  return (
    <Wrapper>
        <SideBar />
        <MainScreen>
            <Header />
            <Outlet />
        </MainScreen>
    </Wrapper>
  )
}
