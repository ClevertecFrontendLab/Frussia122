import { styled } from "styled-components";

import { Button, Form, Input } from "antd";
import { colors, fonts, margin, paddings } from "@shared/data/constants/styles/variables";

export const Row = styled(Form.Item)`
    &:last-child{
        margin-bottom: 0;
    }
    &:nth-child(1) {
        margin-bottom: ${margin.lg};
    }
 
    input{
        border: 1px solid ${colors.silver};
        border-radius: 2px;
        padding: 5px 12px;
        margin-left: -1px;
        &::placeholder {
            font: ${fonts.smallTitle};
            color:${colors.silver};
        }
    }
    
    label{
        border: 1px solid ${colors.silver};
        border-right: none;
        border-radius: 2px;
        padding: ${paddings.xxs} ${paddings.xs};
        height: 100%;
        background: #fafafa;
        &::after{
            margin: 0;
        }
    }
    .validate{
         border: 1px solid ${colors.red};
    }
    .validateText{
        color: ${colors.red};
        opacity: 1;
        z-index: 2;
    }
`;

export const PassInput = styled(Input.Password)`
    height: 40px;
    padding-left: ${paddings.sm};
`;

export const ValidateText = styled.span`
    font: ${fonts.extraSmallTitle};
    color: #8c8c8c;
    position: absolute;
    width: 100%;
    bottom: -20px;
    left: 0;
    @media screen and (max-width: 600px) {
        bottom: -35px;
    }
`;
export const RepeatPassValidate = styled.span`
    opacity: 0;
    font: ${fonts.extraSmallTitle};
`;

export const SaveButton = styled(Button)`
    width: 100%;
    border-radius: 2px;
    padding: 6px 15px;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.04);
    background: ${colors.darkBlue};
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${margin.sm};
    margin-bottom: 0;
    height: 40px;
`;
