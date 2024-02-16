import { Form, Button, Input } from 'antd';
import { styled } from 'styled-components';
export const Row = styled(Form.Item)`
    font: 400 14px / 130% "Inter", sans-serif;
    
    input{
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        padding: 5px 12px;
        margin-left: -1px;
        &::placeholder {
            font: 400 14px / 130% "Inter", sans-serif;
            color: #bfbfbf;
        }
    }
    
    label{
        border: 1px solid #d9d9d9;
        border-right: none;
        border-radius: 2px;
        padding: 5px 12px;
        height: 100%;
        background: #fafafa;
        &::after{
            margin: 0;
        }
    }
    .validate{
         border: 1px solid red;
    }
    .validateText{
        color: red;
        opacity: 1;
        position: static;
        z-index: 2;
    }
`
    export const FInput = styled(Input)`



`

    export const ValidateText = styled.span`
    font: 400 12px / 130% "Inter", sans-serif;
    color: #8c8c8c;
    `

    export const RepeatPassValidate = styled.span`
    opacity: 0;
    font: 400 12px / 130% "Inter", sans-serif;
`
