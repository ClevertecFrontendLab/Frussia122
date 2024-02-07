import { Data } from "@pages/home/models/types";

export type Props = {
    data: Data;
    customStyle?: Customize,
}
export type Customize = {
    headerColor?: string,
    footerColor?:string,
    contentColor?:string,
    headerFontSize?: number,
    footerFontSize?: number,
    contentFontSize?: number,
    headerFontWeight?: number,
    contentFontWeight?: number, 
    footerFontWeight?: number ,
}

export type FooterProps = {
    footerColor?:string,
    footerFontSize?: number,
    footerFontWeight?: number,
}

export type ContentProps = {
    contentColor?:string,
    contentFontSize?: number,
    contentFontWeight?: number,
}

export type HeaderProps = {
    headerColor?:string,
    headerFontSize?: number,
    headerFontWeight?: number,
}