import {Wrapper} from './styled' 
type Props = {
    setIsModalOpen :  React.Dispatch<React.SetStateAction<boolean>>;
}
export const CommentButton:React.FC<Props> = ({setIsModalOpen}) => {

    const showModal = () => {
        setIsModalOpen(true);
    }

  return (
    <Wrapper 
        onClick={showModal} 
        data-test-id='write-review'>
        Написать отзыв
    </Wrapper>
  )
}
