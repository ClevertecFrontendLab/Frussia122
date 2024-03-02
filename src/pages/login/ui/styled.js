import { styled } from 'styled-components';
import { Form, Button, Input, Checkbox  } from 'antd';
import { Link } from 'react-router-dom';

export const FBody = styled(Form)`
    margin-top: 32px;
`

export const LogIn = styled(Button)`
    width: 100%;
    background: #2f54eb;
    color: white;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    &:hover{
        background: #85a5ff;
        color: white;
        border: 1px solid #597ef7;
    }
    `
export const LogInWithGoogle = styled(Button)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
`

export const Buttons = styled(Form.Item)`
    margin-top: 62px;
    @media screen and (max-width: 600px) {
        margin-bottom: 64px;
    }
    @media screen and (max-width: 400px) {
        margin-bottom: 94px;
    }
`


export const CheckArea = styled.div`
    margin-bottom: 24px;
    display:flex;
    justify-content: space-between;
`

export const CheckBox = styled(Checkbox)`

`
export const ForgetPass = styled.span`
        color: #2f54eb;
        cursor: pointer;
        &:hover{
            color: #597ef7;
        }
`