import { CommentButton, ResultInfo } from "@features/feedbackModal/ui/styled";
import React from "react";
import { Props } from "../../models/type";

export const Problem: React.FC<Props> = ({ statusHandle }) => {
  return (
    <ResultInfo
      status="error"
      title="Данные не сохранились"
      subTitle="Что-то пошло не так. Попробуйте еще раз."
      extra={[
        <CommentButton
          data-test-id="write-review-not-saved-modal"
          onClick={() => statusHandle("try")}
        >
          Написать отзыв
        </CommentButton>,
        <CommentButton onClick={() => statusHandle("close")}>
          Закрыть
        </CommentButton>,
      ]}
    />
  );
};
