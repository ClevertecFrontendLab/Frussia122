
export type Data = {
    id?: string;
    header?: string;
    content?: string;
    contentHtml?: boolean;
    footer?: DataFooter[];
}
export type DataFooter = {
    text: string;
    id?: string;
    icon?: React.ReactNode;
}