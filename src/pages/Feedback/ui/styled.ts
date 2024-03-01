import styled from "styled-components";
import { StyleProps } from "@pages/layouts/auth/models/types";


export const Wrapper = styled.div<StyleProps> `
    height: 100vh;
    position: relative;
    background-image: url("${props => props.backgroundimg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`  
