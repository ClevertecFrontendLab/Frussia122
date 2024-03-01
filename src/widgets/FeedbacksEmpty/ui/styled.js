import { Card } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 600px) {
        justify-content: flex-start;
        align-items: inherit;
    }
`

export const Body = styled.div`
    padding: 20px;
    height: 90%;
    
`
export const InfoCard = styled(Card)`
    width: 100%;
    height: auto;
    display: flex;
    padding: 56px 15px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;

    @media screen and (max-width: 600px) {
       padding: 48px 32px;
       margin-bottom: 48px;
    }
    .ant-card-body{
        padding: 0;
    }
`

export const Title = styled.h2`
    font: 500 24px / 130% "Inter", sans-serif;
    text-align: center;
    color: #061178;

`
export const Description = styled.p`
    font: 400 14px / 130% "Inter", sans-serif;
    text-align: center;
    color: #8c8c8c;
    max-width: 520px;
    margin-top: 48px;
    
`