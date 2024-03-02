import { postFeedback } from "@app/store/actions/api/postFeedback";
import { currentMessageSelector, currentRatingSelector } from "@app/store/reducers/feedbacks";
import { Props } from "../models/types";
import {
  Wrapper,
  CommentButton,
  CommentModal,
} from "./styled";
import { useState } from "react";
import { getFeedbacks } from "@app/store/actions/api/getFeedbacks";
import { useAppDispatch, useAppSelector } from "@shared/hooks/store/redux";
import { tokenSelector } from "@app/store/reducers/user";
import { Success, Problem, Default } from "@widgets/feedbackResults";

export const FeedbackModal: React.FC<Props> = ({
  setIsModalOpen,
  isModalOpen,
}) => {
  const dispatch = useAppDispatch();
  const message = useAppSelector(currentMessageSelector)
  const rating = useAppSelector(currentRatingSelector)
  const token = useAppSelector(tokenSelector);

  const [messageStatus, setMessageStatus] = useState<number | null>(0);

  const handleOk = () => {
    setIsModalOpen(false);
    setMessageStatus(0);
  };

  const onSubmit = async () => {
    try {
      const response = await dispatch(postFeedback({ rating, message, token }));
      if (response.payload) {
        setMessageStatus(400);
      } else {
        setMessageStatus(200);
      }
    } catch (err: any) {
      throw new Error(err);
    }
  };

  const statusHandle = async (type: string) => {
    if (type === "success" || type === "close") {
      await dispatch(getFeedbacks({ token }));
      handleOk();
    } else {
      setMessageStatus(0);
    }
  };

  return (
    <Wrapper>
      <CommentModal
        centered={true}
        title={messageStatus ? null : "Ваш отзыв"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
        footer={
          messageStatus
            ? null
            : [
                <CommentButton
                  disabled={rating ? false : true}
                  onClick={onSubmit}
                  data-test-id="new-review-submit-button"
                >
                  Опубликовать
                </CommentButton>,
              ]
        }
      >
        {messageStatus === 0 && <Default rating={rating} message={message}/>}
        {messageStatus === 200 && <Success statusHandle={statusHandle}/>}
        {messageStatus === 400 && <Problem statusHandle={statusHandle}/>}
      </CommentModal>
    </Wrapper>
  );
};
