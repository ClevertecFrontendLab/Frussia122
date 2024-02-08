import styled from "styled-components";
import { Layout } from 'antd';
import { CardWrapper } from "@shared/cardLayout";
const { Footer } = Layout;

export const Wrapper = styled(Footer)`
    background-color: transparent;
    background: transparent;
    
    display: flex;
    width: 100%;
    padding: 24px;
    align-items: flex-end;
    justify-content: space-between;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        padding: 0 24px;
        margin-top: 20px;
        justify-content: center;
        align-items: center;
        ${CardWrapper} {
            width: 100%;
            margin: 10px 0 0 0  !important;

        }
    }
    
    @media screen and (max-width: 400px) {
        flex-direction: column;
        padding: 0 10px;
    }

`
export const ReviewLink = styled.a`
    height: 20px;

    @media screen and (max-width: 767px) {
        order: 2;
        margin: 33px 0;
    }
`;
