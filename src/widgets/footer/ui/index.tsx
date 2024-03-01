import {
    Wrapper,
    ReviewLink
} from './styled';
import { FooterCard } from '../cardData/data';
import { CardLayout } from '@shared/Layouts/Card';
import { AUTH, FEEDBACK } from '@shared/Data/Constants/Routes/ROUTE';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@app/store/store';
import { push } from 'redux-first-history';
import { getFeedbacks } from '@app/Store/Actions/api/getFeedbacks';
import { clearErrors } from '@app/store/Reducers/Feedbacks';



export const MainFooter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const error = useSelector((state:RootState) => state.feedbacks.errors.getStatusCode)
  const token = useSelector((state:RootState) => state.user.token)

  const handleClick = async () => 
  {
   try {
    await dispatch(getFeedbacks({token}));
    if(error) {
      if(error === 403) {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        dispatch(clearErrors());
        dispatch(push(AUTH));
      } 
    } 
    dispatch(push(FEEDBACK));
   } catch (err: any) {
     throw new Error(err)
   }
  }

  
  return (
    <Wrapper>
        <ReviewLink onClick={handleClick} data-test-id='see-reviews' >Смотреть отзывы</ReviewLink>
        <CardLayout 
            data={FooterCard}
                customstyle={{
                headercolor: '#2f54eb',
                headerfontsize: 16,
                contentcolor: '#8c8c8c',
                footerfontsize: 14,
            }}
            />
    </Wrapper>
  )
}
