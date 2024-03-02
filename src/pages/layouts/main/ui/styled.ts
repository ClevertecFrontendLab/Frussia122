import styled from "styled-components";
import { Layout } from 'antd';

export const Wrapper = styled(Layout)`

`;

export const MainScreen = styled(Layout)`
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    @media screen and (min-width: 700px) {
        justify-content: flex-start;
    }
`