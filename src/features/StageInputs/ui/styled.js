import { styled } from 'styled-components';

import { Button, Form, Input } from 'antd';


export const Row = styled(Form.Item)`
    &:last-child{
        margin-bottom: 0;
    }
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

export const PassInput = styled(Input.Password)`

`

export const ValidateText = styled.span`
    font: 400 12px / 130% "Inter", sans-serif;
    color: #8c8c8c;
`
export const RepeatPassValidate = styled.span`
    opacity: 0;
    font: 400 12px / 130% "Inter", sans-serif;
`

export const SaveButton = styled(Button)`
    width: 100%;
    border-radius: 2px;
    padding: 6px 15px;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.04);
    background: #2f54eb;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 0;
`