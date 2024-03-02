import { fonts, margin, paddings } from "@shared/data/constants/styles/variables";
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
    padding: ${paddings.xsm};
    height: 90%;
    
`
export const InfoCard = styled(Card)`
    width: 100%;
    height: auto;
    display: flex;
    padding: 56px ${paddings.xxs};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: ${margin.sm};

    @media screen and (max-width: 600px) {
       padding: ${paddings.xxmd} ${paddings.xmd};
       margin-bottom: ${margin.lg};
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
    font: ${fonts.smallTitle};
    text-align: center;
    color: #8c8c8c;
    max-width: 520px;
    margin-top: ${margin.lg};
    
`