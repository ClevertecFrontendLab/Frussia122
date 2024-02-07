import styled from "styled-components";
import {FooterProps, ContentProps, HeaderProps} from '../models/types'

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    background-color: white;
    margin-top: 10px;
    padding: 24px 0 24px 0;
    align-items: center;
    border-radius: 6px;


    @media screen and (max-width: 800px) {
        margin: 10px 0 0 0;
       
       
    }

`

export const Header = styled.div<HeaderProps>`
    color: ${props => props.headerColor};
    font-size: ${props => props.headerFontSize}px;
    font-weight: ${props => props.headerFontWeight};

    @media screen and (max-width: 834px) {
        padding: 0 24px;
    }
`


export const Content = styled.div<ContentProps>`
    
    color: ${props => props.contentColor};
    font-size: ${props => props.contentFontSize}px;
    font-weight: ${props => props.contentFontWeight};
`

export const Footer = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    border-top: 1px solid #f0f0f0;
    padding: 12px 12px 0 12px;
    margin-top: 12px;
    justify-content: center;
    width: 100%;

  
`

export const FooterItem = styled.li<FooterProps>`
    display: flex;
    align-items: center;
    list-style: none;
    color: ${props => props.footerColor};
    font-size: ${props => props.footerFontSize}px;
    font-weight: ${props => props.footerFontWeight};
    cursor: pointer;
    margin-right: 11px;
`
export const FooterItemText = styled.span`
    margin-left: 8px;
`