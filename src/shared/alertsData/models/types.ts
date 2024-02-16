export type Data = DataItem[];

export type DataItem = {
    currentLink: string;
    icon: React.ReactNode;
    id: string;
    title: string; 
    buttonText: string;
    description: string;
    linkToRedirect: string;
}