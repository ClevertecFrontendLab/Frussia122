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

    &:hover{
        background: #85a5ff;
        color: white;
        border: 1px solid #597ef7;
    }
    `
export const LogInWithGoogle = styled(Button)`
    width: 100%;
`

export const Buttons = styled(Form.Item)`
    margin-top: 62px;
`


export const CheckArea = styled.div`
    margin-bottom: 24px;
    display:flex;
    justify-content: space-between;
`

export const CheckBox = styled(Checkbox)`

`
export const ForgetPass = styled.span`

`