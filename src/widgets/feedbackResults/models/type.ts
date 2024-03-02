export type Props = {
    statusHandle:  (type: string) => Promise<void>;
    rating?: number;
    message?: string;
}
export type DefaultProps = {
    rating: number;
    message: string;
}