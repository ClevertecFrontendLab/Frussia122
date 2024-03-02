import { colors, fonts, margin, paddings } from "@shared/data/constants/styles/variables";
import { Form, Button, Input } from "antd";
import { styled } from "styled-components";

export const Row = styled(Form.Item)`
    font: ${fonts.smallTitle};
    position: relative;
    .ant-input-affix-wrapper{
        padding:0;
    }
    &:nth-child(2) {
        margin-bottom: ${margin.md};
    }
    @media screen and (max-width: 600px) {
        margin-bottom:  ${margin.md};
        &:nth-child(2) {
            margin-bottom: ${margin.lg};
        }
    }
    .ant-input-password{
        height: 40px;
        padding-left: ${paddings.sm};
    }
    input{
        border: 1px solid #d9d9d9;
        border-radius: 2px;
      
        margin-left: -1px;
        &::placeholder {
            font: ${fonts.smallTitle};
            color: #bfbfbf;
        }
        
    }
    .ant-input-prefix{
        border-right: 1px solid ${colors.silver};
        padding: 10px 12px;
        background: #fafafa;
        margin-right: 10px;
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
export const FInput = styled(Input)`
    height: 40px !important;
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
