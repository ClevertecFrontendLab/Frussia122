export type Feedback = {
    message: string;
    rating: number;
    fullName?: string;
    imageSrc?: string;
    id?: string;
    createdAt?: string;

}
export type FeedbackError = {
    postStatusCode: number;
    getStatusCode: number;
    error: string;
    message: string;
}
export type FeedBackState = {
    feedbacks: Feedback[];
    loading: boolean;
    currentFeedback: Feedback;
    errors: FeedbackError;
}

