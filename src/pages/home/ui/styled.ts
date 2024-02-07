import { styled } from "styled-components";
import { StyleProps } from "../models/types";

export const Wrapper = styled.div<StyleProps>`
    height: 100%;
    position: relative;
    background-image: url("${props => props.backgroundImg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding-bottom: 190px;

    @media screen and (max-width: 600px) {
        padding-bottom: 225px;
    }
    @media screen and (min-height: 1401px) {
        height: 90vh;
    }

    
`  
export const Content = styled.div`
    max-width: 752px;
    margin: 24px;
    @media screen and (max-width: 400px) {
        margin: 10px 10px; 
    }
`