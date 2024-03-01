import { Data } from "@pages/home/models/types";

export type Props = {
    data: Data;
    customstyle?: Customize,
}
export type Customize = {
    headercolor?: string,
    footercolor?:string,
    contentcolor?:string,
    headerfontsize?: number,
    footerfontsize?: number,
    contentfontsize?: number,
    headerfontweight?: number,
    contentfontweight?: number, 
    footerfontweight?: number ,
}

export type FooterProps = {
    footercolor?:string,
    footerfontsize?: number,
    footerfontweight?: number,
}

export type ContentProps = {
    contentcolor?:string,
    contentfontsize?: number,
    contentfontweight?: number,
}

export type HeaderProps = {
    headercolor?:string,
    headerfontsize?: number,
    headerfontweight?: number,
}