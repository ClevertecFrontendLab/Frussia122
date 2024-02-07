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

export const HeaderTitle = styled(Title)`
    font: 700 38px / 130% "Inter", sans-serif;
    color: #262626;
    max-width: 1055px;
    
`

export const Settings = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 9px 15px;
`
export const Type = styled.span`
    margin-left: 10px;
`