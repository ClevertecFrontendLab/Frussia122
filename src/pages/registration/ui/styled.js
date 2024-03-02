import { styled } from 'styled-components';
import { Form, Button, Input } from 'antd';



export const FBody = styled(Form)`
    margin-top: 32px;
    max-width: 369px;
`
export const LogIn = styled(Button)`
    width: 100%;
    background: #2f54eb;
    color: white;
    margin-bottom: 16px;
    height: 40px;
    &:hover{
        background: #85a5ff;
        color: white;
        border: 1px solid #597ef7;
    }
`
export const LogInWithGoogle = styled(Button)`
        width: 100%;
        height: 40px;
`
   
export const Buttons = styled(Form.Item)`
    margin-top: 62px;
    @media screen and (max-width: 600px) {
        margin-top: 32px;
    }
`



