import { StyleProps } from "@pages/layouts/auth/models/types";
import { styled } from "styled-components";

export const Wrapper = styled.div<StyleProps> `
    height: 100%;
    position: relative;
    background-image: url("${props => props.backgroundimg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
   

    @media screen and (max-width: 600px) {
       
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