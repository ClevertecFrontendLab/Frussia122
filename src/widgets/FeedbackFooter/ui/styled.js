import { Modal,Input } from "antd";
import { Footer } from "antd/lib/layout/layout";
import styled from "styled-components";


export const Wrapper = styled(Footer)`
    background-color: transparent;
    background: transparent;
    display: flex;
    padding: 24px;
    margin-top: 30px;
    align-items: center;
    
    

`

export const ShowAllComments = styled.span`
    margin-left: 23px;
    font: 400 16px / 130% "Inter", sans-serif;
    color: #2f54eb;
    cursor: pointer;

    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`

