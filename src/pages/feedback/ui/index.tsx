import { Header } from "@widgets/header";
import { useEffect, useState } from "react";
import { getFeedbacks } from "@app/store/actions/api/getFeedbacks";
import { FeedbackFooter } from "@widgets/feedbackFooter";
import { FeedbacksList } from "@widgets/feedbacksList";
import { Wrapper } from "./styled";
import { FeedbackEmpty } from "@widgets/feedbacksEmpty";
import { Loader } from "@shared/components/loader";
import { StatusModal } from "@widgets/statusModal";
import { useAppDispatch, useAppSelector } from "@shared/hooks/store/redux";
import { feedbacksSelector, loadingSelector, getErrorSelector } from "@app/store/reducers/feedbacks";
import { tokenSelector } from "@app/store/reducers/user";
import background from "@pages/layouts/main/images/Main_page_light.png";

export const Feedback = () => {
  const dispatch = useAppDispatch();
  const feedbacksData = useAppSelector(feedbacksSelector);
  const isLoading = useAppSelector(loadingSelector);
  const error = useAppSelector(getErrorSelector);
  const token = useAppSelector(tokenSelector);

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    await dispatch(getFeedbacks({ token }));
  };

  return (
    <>
      {isLoading && <Loader />}
      <Wrapper backgroundimg={background}>
        {error === 500 ? <StatusModal /> : ""}

        <Header breadcrumb="Отзывы покупателей" />
        {feedbacksData.length > 0 ? (
          <>
            <FeedbacksList
              feedbacksData={feedbacksData}
              isExpanded={isExpanded}
            />
            <FeedbackFooter
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          </>
        ) : (
          <FeedbackEmpty />
        )}
      </Wrapper>
    </>
  );
};
