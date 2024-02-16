import styled from "styled-components";
import {StyleProps} from '../models/types'


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
    padding: 64px 82px;
    border-radius: 2px;

    @media screen and (max-width: 600px) {
        padding: 64px 16px;
        max-width: 400px;
    }
    @media screen and (max-width: 400px) {
        padding: 32px 16px;
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
    margin: 24px 0 0 0;
    font: 500 24px / 130% "Inter", sans-serif;

`

export const Description = styled.p`
    font: 400 14px / 130% "Inter", sans-serif;
    color: #8c8c8c;
    margin: 0 24px 24px 24px;
    max-width: 370px;
    text-align: center;
    @media screen and (max-width: 400px) {
        margin: 6px 0 24px 0;
    }

    
`

export const Button = styled.button`
    margin: 0;
    width: 100%;
    background: #2f54eb;
    color: white;
    text-align: center;
    padding: 11px;
    border: none;
`