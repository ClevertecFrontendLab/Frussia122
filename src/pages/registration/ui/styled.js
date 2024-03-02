import { styled } from 'styled-components';
import { Form, Button, Input } from 'antd';
import { colors, margin } from '@shared/data/constants/styles/variables';


export const FBody = styled(Form)`
    margin-top: ${margin.md};
    max-width: 369px;
`
export const LogIn = styled(Button)`
    width: 100%;
    background: ${colors.darkBlue};
    color: white;
    margin-bottom: ${margin.xxs};
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
    margin-top: ${margin.xl};
    @media screen and (max-width: 600px) {
        margin-top: ${margin.sm};
    }
`



