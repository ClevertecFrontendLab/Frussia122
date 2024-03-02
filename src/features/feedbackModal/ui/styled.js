import styled from "styled-components";
import { Button, Modal, Input, Result } from "antd";
export const Wrapper = styled.div`

`
export const CommentButton = styled(Button)`
    border: 1px solid #2f54eb;
    border-radius: 2px;
    padding: 4px 15px;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.04);
    background: #2f54eb;
    color: white;
    height: 40px;
    width: 180px;
    
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const CommentModal = styled(Modal)`
    z-index: 7;
    .ant-result-title{
        font: 500 24px / 130% "Inter", sans-serif;
        line-height: 1.1; 
    }
    .ant-result-extra{
        ${CommentButton}:nth-child(2){
            background: transparent;
            color: black;
            border: 1px solid #d9d9d9;
        }
    }
    @media screen and (max-width: 600px) {
        .ant-result-extra{
            display: flex;
            .ant-result-extra{
               
            }
        }
    }
    
`;
export const Blur = styled.div`
    position: absolute;
    backdrop-filter: blur(10px);
    background: rgba(121, 156, 212, 0.1);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 7;
`;

export const TextArea = styled(Input.TextArea)`
    margin-top: 21px;
`;

export const ResultInfo = styled(Result)`
    @media screen and (max-width: 600px) {
        padding: 0;
    }
`;
