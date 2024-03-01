import { Header } from "@widgets/header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@app/store/store";
import { getFeedbacks } from "@app/store/actions/api/getFeedbacks";
import { FeedbackFooter } from "@widgets/feedbackFooter";
import { FeedbacksList } from "@widgets/feedbacksList";
import { Wrapper } from "./styled";
import background from '@pages/Layouts/Main/images/Main_page_light.png'
import { FeedbackEmpty } from "@widgets/feedbacksEmpty";
import { Loader } from "@shared/components/Loader";
import { StatusModal } from '@widgets/statusModal';


export const Feedback = () => {
    const dispatch = useDispatch<AppDispatch>()
    const feedbacksData = useSelector((state: RootState) => state.feedbacks.feedbacks)
    const isLoading = useSelector((state: RootState) => state.feedbacks.loading)
    const error = useSelector((state: RootState) => state.feedbacks.errors.getStatusCode)
    const token = useSelector((state: RootState) => state.user.token);
    
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    const fetchFeedbacks = async () => {
        console.log(token);
        await dispatch(getFeedbacks({token}));
    }


  return (
    <>
      {isLoading ? <Loader/> : ''}
      <Wrapper backgroundimg={background}>
          {error === 500 ? <StatusModal /> : ''}

          <Header breadcrumb="Отзывы покупателей"/>
          {feedbacksData.length > 0 ? 
          <>
          <FeedbacksList 
              feedbacksData={feedbacksData}
              isExpanded={isExpanded}
          /> 
          <FeedbackFooter isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
          </>
          : <FeedbackEmpty />}
      </Wrapper>
    </>
  )
}
