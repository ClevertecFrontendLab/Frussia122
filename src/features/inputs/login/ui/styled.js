import { styled } from "styled-components";
import { Form, Input } from "antd";
import { colors, fonts, paddings } from "@shared/data/constants/styles/variables";

export const Row = styled(Form.Item)`
    font: ${fonts.smallTitle};
    position: relative;
    input{
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        padding: ${paddings.xxs} ${paddings.xs} ${paddings.xxs} 25%;
        margin-left: -1px;
        &::placeholder {
            font: ${fonts.smallTitle};
            color: ${colors.silver};
        }

    }
    .ant-input-password{
        height: 40px;
        padding-left: ${paddings.sm};
    }
   .ant-form-item-label{
        position: absolute;
        top: 2px;
        left: 0;
        z-index: 4;
        border-right: 1px solid ${colors.silver};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 ${paddings.xs};
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
`;
export const FInput = styled(Input)`
    height: 40px;
  
`;
