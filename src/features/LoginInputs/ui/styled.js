import { styled } from 'styled-components';
import { Form, Input  } from 'antd';


export const FInput = styled(Input)`

`

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
`