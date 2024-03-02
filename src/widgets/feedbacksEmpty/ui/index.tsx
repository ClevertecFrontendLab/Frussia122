import { CommentButton } from "@features/commentButton";
import { FeedbackModal } from "@features/feedbackModal";
import { useState } from "react";
import { InfoCard, Wrapper, Title, Description, Body } from "./styled";

export const FeedbackEmpty = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Body>
      <FeedbackModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Wrapper>
        <InfoCard>
          <Title>Оставьте свой отзыв первым</Title>
          <Description>
            Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении.
            Поделитесь своим мнением и опытом с другими пользователями, и
            помогите им сделать правильный выбор.
          </Description>
        </InfoCard>
        <CommentButton setIsModalOpen={setIsModalOpen} />
      </Wrapper>
    </Body>
  );
};
