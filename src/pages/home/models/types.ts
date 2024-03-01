
export type Data = {
    id?: string;
    header?: string;
    content?: string;
    contentHtml?: boolean;
    footer?: DataFooter[];
}
export type DataFooter = {
    id?: string;
    icon?: React.ReactNode;
    text: string;
}