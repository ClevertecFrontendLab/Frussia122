import { styled } from 'styled-components';
import { Form, Input  } from 'antd';




export const Row = styled(Form.Item)`
    font: 400 14px / 130% "Inter", sans-serif;
    position: relative;
    input{
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        padding: 5px 12px 5px 25%;
        margin-left: -1px;
        &::placeholder {
            font: 400 14px / 130% "Inter", sans-serif;
            color: #bfbfbf;
        }

    }
    .ant-input-password{
        height: 40px;
        padding-left: 16px;
    }
   .ant-form-item-label{
        position: absolute;
        top: 2px;
        left: 0;
        z-index: 4;
        border-right: 1px solid #d9d9d9;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 12px;
        height: 92%;
        background: #fafafa;
        &::after{
            margin: 0;
        }
    }
    .validate{
        border: 1px solid red;
   }
   .ant-form-item-label{
        
   }
`
export const FInput = styled(Input)`
    height: 40px;
  
`