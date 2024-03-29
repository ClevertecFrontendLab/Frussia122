import styled from "styled-components";
import { Props } from "../models/types";
import { paddings,margin } from "@shared/data/constants/styles/variables";

export const Wrapper = styled.div<Props>`
    position: absolute;
    bottom:0;
    box-shadow: inset 0 1px 0 0 #f0f0f0;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: ${(props) => (props.collapsed ? "center" : "start")};
    width: 100%;
    padding: ${paddings.sm} ${paddings.xs} ${paddings.sm} ${paddings.xs};

    @media screen and (max-width: 600px) {
       left: ${(props) => (props.collapsed ? "-100px" : "0")};
    
    }
`;
export const Icon = styled.img`
    margin-right: ${margin.sm};
`;
