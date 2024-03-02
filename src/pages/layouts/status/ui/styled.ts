import styled from "styled-components";
import {StyleProps} from '../models/types'
import { colors, fonts, margin, paddings } from "@shared/data/constants/styles/variables";


export const Wrapper = styled.section<StyleProps>`
    background-image: url("${props => props.backgroundImg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
 
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #799CD4;
        z-index: 1;
        opacity: .5;
    }
`;

export const Card = styled.div`
    background: white;
    z-index: 2;
    padding: ${paddings.lg} ${paddings.xl};
    border-radius: 2px;

    @media screen and (max-width: 600px) {
        padding: ${paddings.lg} ${paddings.sm};
        max-width: 400px;
    }
    @media screen and (max-width: 400px) {
        padding: ${paddings.xmd} ${paddings.sm};
        max-width: 328px;
    }

   
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    svg{
        font-size: 70px;
    }
`

export const Title = styled.h2`
    margin: ${margin.sm} 0 0 0;
    font: ${fonts.tabletTitle};
`

export const Description = styled.p`
    font: ${fonts.smallTitle};
    color: #8c8c8c;
    margin: 0 ${margin.sm} ${margin.sm} ${margin.sm};
    max-width: 370px;
    text-align: center;
    @media screen and (max-width: 400px) {
        margin:${margin.xs} 0 ${margin.sm} 0;
    }

    
`

export const Button = styled.button`
    margin: 0;
    width: 100%;
    background: ${colors.darkBlue};
    color: white;
    text-align: center;
    padding: 11px;
    border: 1px solid transparent;
    transition: all .2s linear;
    &:hover{
        background: #85a5ff;
        border: 1px solid #597ef7;
        cursor: pointer;
    }
`