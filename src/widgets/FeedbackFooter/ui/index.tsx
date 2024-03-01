import { useState } from 'react';
import {
    Wrapper,
    ShowAllComments,
} from './styled';
import { FeedbackModal } from '@features/feedbackModal';
import { CommentButton } from '@features/commentButton';

type Props = {
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

export const FeedbackFooter: React.FC<Props> = ({isExpanded, setIsExpanded}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const expandedToggle = () => {
        setIsExpanded(!isExpanded);
    }

  return (
    <>
        <FeedbackModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <Wrapper>
            <CommentButton  setIsModalOpen={setIsModalOpen}/>
            <ShowAllComments onClick={expandedToggle} data-test-id='all-reviews-button'>
                {isExpanded === true ? 'Свернуть все отзывы' : 'Развернуть все отзывы'}
            </ShowAllComments>
        </Wrapper>
    </>
  )
}
