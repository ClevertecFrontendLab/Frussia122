import { Feedback } from "@app/store/reducers/models/type";

export const dateFormatter = (feedbacks: Feedback[]) => {
  return feedbacks.map((item: Feedback) => ({
    ...item,
    createdAt: item.createdAt
      ? new Date(item.createdAt).toLocaleString("ru", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })
      : item.createdAt,
  }));
};
