import { useDispatch } from 'react-redux';
import { Props } from '../models/type';
import {
    CommentRate
} from './styled';
import { StarTwoTone  } from '@ant-design/icons';
import { AppDispatch } from '@app/store/store';
import { setRating } from '@app/store/reducers/feedbacks';


export const CustomRate: React.FC<Props> = ({isDisabled, defaultValue}) => {
  const dispatch = useDispatch<AppDispatch>();


  const handleChange = (value: number) => {
    dispatch(setRating(value));
  }
  return (
    <CommentRate 
            disabled={isDisabled}
            defaultValue={defaultValue}
            character={<StarTwoTone />}
            onChange={handleChange}
    />
  )
}
