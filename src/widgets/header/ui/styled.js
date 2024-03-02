import styled from "styled-components";
import { Layout } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

export const Wrapper = styled.section`
    background-color: #f0f5ff;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const HeaderTitle = styled.h1`
    font: 700 38px / 130% "Inter", sans-serif;
    color: #262626;
    max-width: 1055px;
    @media screen and (max-width: 834px) {
        font: 700 20px / 130% "Inter", sans-serif;
        max-width: 500px;
        margin-top: 14px;
    }
    @media screen and (max-width: 400px) {
        font: 500 20px / 130% "Inter", sans-serif;
        max-width: 280px;
        margin-top: 27px;
    }
`

export const Settings = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 9px 15px;
    @media screen and (max-width: 400px) {
        background: white;
        box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.04);
        border: 1px solid #d9d9d9;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        justify-content: center;
    }
`
export const Type = styled.span`
    margin-left: 10px;
    @media screen and (max-width: 400px) {
        display: none;
    }
`