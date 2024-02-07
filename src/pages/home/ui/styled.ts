import { styled } from "styled-components";
import { StyleProps } from "../models/types";

export const Wrapper = styled.div<StyleProps>`
    height: 100%;
    background-image: url("${props => props.backgroundImg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

`  
export const Content = styled.div`
    max-width: 752px;
    margin: 24px;
`