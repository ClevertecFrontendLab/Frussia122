import { postFeedback } from "@app/store/Actions/api/postFeedback";
import { setMessage } from "@app/store/Reducers/Feedbacks";
import { AppDispatch, RootState } from "@app/store/store";
import { CustomRate } from "@shared/Components/Rate";

import { useDispatch, useSelector } from "react-redux";
import { Props } from "../models/types";
import { Blur, CommentButton, CommentModal, TextArea, ResultInfo } from "./styled";
import { useState } from "react";
import { getFeedbacks } from "@app/store/Actions/api/getFeedbacks";

export const FeedbackModal: React.FC<Props> = ({setIsModalOpen, isModalOpen}) => {
    let timeoutId: any = null;
    const dispatch = useDispatch<AppDispatch>();
    const message = useSelector((state: RootState) => state.feedbacks.currentFeedback.message);
    const rating = useSelector((state: RootState) => state.feedbacks.currentFeedback.rating);
    const token = useSelector((state: RootState) => state.user.token);

    const [messageStatus, setMessageStatus] = useState<number | null>(0);
  
    const handleOk = () => {
        setIsModalOpen(false);
        setMessageStatus(0)
      };
  
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const currentMessage = e.target.value;
        clearTimeout(timeoutId)
    
        timeoutId = setTimeout(() => {
            dispatch(setMessage(currentMessage));
          }, 500);
    
      }
      
      const onSubmit = async () => {   
          try{
            const response = await dispatch(postFeedback({ rating, message, token }));
            if(response.payload) {
              setMessageStatus(400);
            } else {
              setMessageStatus(200);
            }
          } catch(err: any) {
            throw new Error(err)
          }
    };


    const statusHandle = async (type: string) => {
      if (type === 'success' || type === 'close') {
          await dispatch(getFeedbacks({token}));
          handleOk();
      } else if (type === 'try') {
          setMessageStatus(0);
      }
    }

    return (
      <>
          {isModalOpen ? <Blur /> : ''}
          <CommentModal
              centered={true}
              title={messageStatus ? null : 'Ваш отзыв'}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleOk}
              footer={messageStatus ? null : [
                <CommentButton onClick={onSubmit} data-test-id='new-review-submit-button'>Опубликовать</CommentButton>
            ]} 
          >
              {messageStatus === 0 && <>
                <CustomRate isDisabled={false} defaultValue={rating} />
                <TextArea placeholder="Расскажите, почему вам понравилось наше приложение" defaultValue={message} onChange={(e) => handleChange(e)} rows={4} />
              </>}
              {messageStatus === 200 && 
              <ResultInfo 
                status="success" 
                title="Отзыв успешно опубликован" 
                extra={[
                  <CommentButton onClick={() => statusHandle('success')}>
                    Отлично
                  </CommentButton>,
                ]}
                />} {}
              {messageStatus === 400 && 
                  <ResultInfo 
                  status="error" 
                  title="Данные не сохранились" 
                  subTitle="Что-то пошло не так. Попробуйте еще раз."
                  extra={[
                    <CommentButton data-test-id='write-review-not-saved-modal'
                    onClick={() => statusHandle('try')}>
                      Написать отзыв
                    </CommentButton>,
                      <CommentButton onClick={() => statusHandle('close')}>
                      Закрыть
                    </CommentButton>,
                  ]}
                  />} {}
          </CommentModal>
      </>
  )
}
