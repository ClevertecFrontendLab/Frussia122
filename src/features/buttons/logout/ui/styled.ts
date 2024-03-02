import styled from "styled-components";
import { Props } from "../models/types";

export const Wrapper = styled.div<Props>`
    position: absolute;
    bottom:0;
    box-shadow: inset 0 1px 0 0 #f0f0f0;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: ${(props) => (props.collapsed ? "center" : "start")};
    width: 100%;
    padding: 16px 13px 16px 13px;

    @media screen and (max-width: 600px) {
       left: ${(props) => (props.collapsed ? "-100px" : "0")};
    
    }
`;
export const Icon = styled.img`
    margin-right: 25px;
`;
