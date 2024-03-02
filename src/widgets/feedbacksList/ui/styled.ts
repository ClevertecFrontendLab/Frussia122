import styled from "styled-components"
import { Card, Avatar } from 'antd';
import { fonts, margin, paddings } from "@shared/data/constants/styles/variables";
type Props = {
    isExpanded: boolean;
}

export const Wrapper = styled.div<Props>`
    height: ${(props) => props.isExpanded ? '80vh' : 'auto'};

    margin: 0 ${margin.sm};
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
        padding: ${paddings.sm};
    }

    border-radius: 5px;
    margin-top: ${margin.sm};
    padding-right: ${paddings.sm};
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
    
    font: ${fonts.mobileTablet};
    color: #262626;
    text-align: center;
    margin-bottom: 0;
    margin-top: ${margin.xxs};
    width: 120px;

    @media screen and (max-width: 600px) {
        width: 80px;
        margin-left: ${margin.sm};
        text-align: left;
        margin-top: 0;
    }
`

export const Date = styled.span`
    font: ${fonts.extraSmallTitle};
    color: #bfbfbf;
    margin-left: ${margin.xxs};
`

export const Description = styled.p`
    margin-top: ${margin.xs};
    font: ${fonts.smallTitle};
    color: #8c8c8c;
    word-wrap: break-word;
    max-width: 100%;
`
