export type Feedback = {
    message: string;
    rating: number;
    fullName?: string;
    imageSrc?: string;
    id?: string;
    createdAt?: string;
}

export type Props = {
    feedbacksData: Feedback[]
    isExpanded: boolean;
}