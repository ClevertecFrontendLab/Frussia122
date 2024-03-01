export type Feedback = {
    fullName?: string;
    imageSrc?: string;
    message: string;
    rating: number;
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
    feedbacks: Feedback[],
    loading: boolean;
    currentFeedback: Feedback
    errors: FeedbackError;
}
