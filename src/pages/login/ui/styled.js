import { styled } from 'styled-components';
import { Form, Button, Input, Checkbox  } from 'antd';
import { Link } from 'react-router-dom';
import { colors, margin } from '@shared/data/constants/styles/variables';

export const FBody = styled(Form)`
    margin-top: ${margin.md};
`

export const LogIn = styled(Button)`
    width: 100%;
    background: ${colors.darkBlue};
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
    margin-top: ${margin.xl};
    @media screen and (max-width: 600px) {
        margin-bottom: ${margin.xl};
    }
    @media screen and (max-width: 400px) {
        margin-bottom: ${margin.xxl};
    }
`


export const CheckArea = styled.div`
    margin-bottom: ${margin.sm};
    display:flex;
    justify-content: space-between;
`

export const CheckBox = styled(Checkbox)`

`
export const ForgetPass = styled.span`
        color: ${colors.darkBlue};
        cursor: pointer;
        &:hover{
            color: #597ef7;
        }
`