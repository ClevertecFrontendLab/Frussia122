import { Form, Button, Input } from "antd";
import { styled } from "styled-components";
export const Row = styled(Form.Item)`
    font: 400 14px / 130% "Inter", sans-serif;
    position: relative;
    .ant-input-affix-wrapper{
        padding:0;
    }
    &:nth-child(2) {
        margin-bottom: 32px;
    }
    @media screen and (max-width: 600px) {
        margin-bottom: 32px;
        &:nth-child(2) {
            margin-bottom: 52px;
        }
    }
    .ant-input-password{
        height: 40px;
        padding-left: 16px;
    }
    input{
        border: 1px solid #d9d9d9;
        border-radius: 2px;
      
        margin-left: -1px;
        &::placeholder {
            font: 400 14px / 130% "Inter", sans-serif;
            color: #bfbfbf;
        }
        
    }
    .ant-input-prefix{
        border-right: 1px solid #d9d9d9;
        padding: 10px 12px;
        background: #fafafa;
        margin-right: 10px;
    }
    .validate{
         border: 1px solid red;
    }
    .validateText{
        color: red;
        opacity: 1;
        z-index: 2;
    }
`;
export const FInput = styled(Input)`
    height: 40px !important;
`;

export const ValidateText = styled.span`
    font: 400 12px / 130% "Inter", sans-serif;
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
    font: 400 12px / 130% "Inter", sans-serif;
`;
