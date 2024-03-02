import { Feedback } from "@app/store/reducers/models/type";

export const sortFeedbacks = (feedbacks: Feedback[]) => {
  return feedbacks.sort((a, b) => {
    const dateA = a.createdAt ? new Date(a.createdAt).getTime() : -1;
    const dateB = b.createdAt ? new Date(b.createdAt).getTime() : -1;
    return dateB - dateA;
  });
};
