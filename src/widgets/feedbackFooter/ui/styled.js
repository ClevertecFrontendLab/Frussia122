import { colors, fonts, margin, paddings } from "@shared/data/constants/styles/variables";
import { Modal,Input } from "antd";
import { Footer } from "antd/lib/layout/layout";
import styled from "styled-components";


export const Wrapper = styled(Footer)`
    background-color: transparent;
    background: transparent;
    display: flex;
    padding: ${paddings.md};
    margin-top: ${margin.md};
    align-items: center;
`

export const ShowAllComments = styled.span`
    margin-left: ${margin.sm};
    font: ${fonts.mobileTablet};
    color: ${colors.darkBlue};
    cursor: pointer;
    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`

