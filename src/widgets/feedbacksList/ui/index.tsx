import { CustomRate } from "@shared/components/rate";

import {
  Wrapper,
  CardBody,
  UserInfo,
  UserIcon,
  Name,
  Date,
  CommentBody,
  Description,
} from "./styled";
import { Props } from "../models/type";

export const FeedbacksList: React.FC<Props> = ({
  isExpanded,
  feedbacksData,
}) => {
  const displayedFeedbacks = isExpanded
    ? feedbacksData
    : feedbacksData.slice(0, 4);

  return (
    <>
      <Wrapper isExpanded={isExpanded}>
        {feedbacksData &&
          displayedFeedbacks.map((item) => (
            <CardBody key={item.id}>
              <UserInfo>
                <UserIcon src={item.imageSrc} />
                <Name>{item.fullName || "Антон Петров"}</Name>
              </UserInfo>
              <CommentBody>
                <CustomRate defaultValue={item.rating} isDisabled={true} />
                <Date>{item.createdAt}</Date>
                <Description>{item.message}</Description>
              </CommentBody>
            </CardBody>
          ))}
      </Wrapper>
    </>
  );
};
