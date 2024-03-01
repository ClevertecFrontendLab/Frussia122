import { CustomRate } from "@shared/Components/Rate"

import { 
    Wrapper,
    CardBody, 
    UserInfo, 
    UserIcon, 
    Name, 
    Date,
    CommentBody, 
    Description ,
} from "./styled"


type Feedback = {
    fullName?: string | null;
    imageSrc?: string | null;
    message: string;
    rating: number;
    id?: string;
    createdAt?: string | null;
}

type Props = {
    feedbacksData: Feedback[]
    isExpanded: boolean;
}
export const FeedbacksList: React.FC<Props> = ({isExpanded, feedbacksData}) => {

  const displayedFeedbacks  = isExpanded ? [...feedbacksData].reverse() : [...feedbacksData.slice(-4)].reverse();
 
  return (
    <>
    <Wrapper isExpanded={isExpanded}>
        {feedbacksData && displayedFeedbacks .map(item => (
        <CardBody key={item.id}>
            <UserInfo>
                <UserIcon src={item.imageSrc}/>
                <Name>{item.fullName || 'Антон Петров'}</Name>
            </UserInfo>
            <CommentBody>
                <CustomRate defaultValue={item.rating} isDisabled={true}/>
                <Date>{item.createdAt}</Date>
                <Description>
                   {item.message}
                </Description>
            </CommentBody>
        </CardBody> 
        ))}
     </Wrapper>
    </>
    

  )
}
