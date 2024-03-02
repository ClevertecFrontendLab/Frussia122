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
import { HTTP_STATUS } from "@shared/data/constants/http/status";

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
    setMessageStatus(HTTP_STATUS.DEFAULT);
  };

  const onSubmit = async () => {
    try {
      const response = await dispatch(postFeedback({ rating, message, token }));
      if (response.payload) {
        setMessageStatus(HTTP_STATUS.NOT_FOUND);
      } else {
        setMessageStatus(HTTP_STATUS.OK);
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
      setMessageStatus(HTTP_STATUS.DEFAULT);
    }
  };

  return (
    <Wrapper>
      <CommentModal
        centered={true}
        closable={messageStatus ? false : true }
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
        {messageStatus === HTTP_STATUS.DEFAULT && <Default rating={rating} message={message}/>}
        {messageStatus === HTTP_STATUS.OK && <Success statusHandle={statusHandle}/>}
        {messageStatus === HTTP_STATUS.NOT_FOUND && <Problem statusHandle={statusHandle}/>}
      </CommentModal>
    </Wrapper>
  );
};
