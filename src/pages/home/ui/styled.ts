import { StyleProps } from "@pages/layouts/auth/models/types";
import { margin } from "@shared/data/constants/styles/variables";
import { styled } from "styled-components";

export const Wrapper = styled.div<StyleProps> `
    height: 100%;
    position: relative;
    background-image: url("${props => props.backgroundimg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    @media screen and (min-height: 1401px) {
        height: 90vh;
    }
`  
export const Content = styled.div`
    max-width: 752px;
    margin: ${margin.sm};
    @media screen and (max-width: 400px) {
        margin: 10px 10px; 
    }
`