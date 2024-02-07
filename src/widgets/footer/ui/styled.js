import styled from "styled-components";
import { Layout } from 'antd';

const { Footer } = Layout;

export const Wrapper = styled(Footer)`
    background-color: transparent;
    background: transparent;
    margin-top: -20px;
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;

`
export const ReviewLink = styled.a`
    height: 20px;
`;
