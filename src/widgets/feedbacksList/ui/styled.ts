import styled from "styled-components"
import { Card, Avatar } from 'antd';
type Props = {
    isExpanded: boolean;
}

export const Wrapper = styled.div<Props>`
    height: ${(props) => props.isExpanded ? '80vh' : 'auto'};

    margin: 0 20px;
    padding-bottom: 0;
    padding-top: 0;
    
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    @media screen and (max-width: 600px) {
        height: 495px;
    }

    @media (max-width: 600px) and (min-height: 900px) {
        height: 635px;
    }

`;


export const CardBody = styled(Card)`
    .ant-card-body{
        display: flex;
        align-items: center;
        padding: 16px;
    }

    border-radius: 5px;
    margin-top: 20px;
    padding-right: 16px;
    @media screen and (max-width: 600px) {
        .ant-card-body{
           flex-direction: column;
           align-items: flex-start;
        }
    }
    
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 36px;
    

    @media screen and (max-width: 600px) {
        margin: 0;
        align-items: flex-start;
        flex-direction: row;
        
    }
`

export const CommentBody = styled.div`
   
    word-wrap: break-word;
`



export const UserIcon = styled(Avatar)`
    width: 42px;
    height: 42px;
`

export const Name = styled.p`
    
    font: 400 16px / 130% "Inter", sans-serif;
    color: #262626;
    text-align: center;
    margin-bottom: 0;
    margin-top: 12px;
    width: 120px;

    @media screen and (max-width: 600px) {
        width: 80px;
        margin-left: 20px;
        text-align: left;
        margin-top: 0;
    }
`

export const Date = styled.span`
    font: 400 12px / 130% "Inter", sans-serif;
    color: #bfbfbf;
    margin-left: 16px;
`

export const Description = styled.p`
    margin-top: 12px;
    font: 400 14px / 130% "Inter", sans-serif;
    color: #8c8c8c;
    word-wrap: break-word;
    max-width: 100%;
`
