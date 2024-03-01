import {
  Wrapper,
  Button,
  TypeLink
} from './styled';
import { Props } from "../models/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@app/store/store";
import { push } from "redux-first-history";
import { AUTH, REGISTRATION } from '@shared/data/constants/routes/route';

export const AuthTabs: React.FC<Props> = ({type}) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (to:string) => {
    dispatch(push(to));
  }
  
  return (
    <Wrapper>
      <Button 
      onClick={() => handleClick(AUTH)}
      className={type === '/auth' ? 'activeType' : ''}>
        <TypeLink>Вход</TypeLink>
      </Button>
      <Button 
      onClick={() => handleClick(`${AUTH}/${REGISTRATION}`)}
      className={type != '/auth' ? 'activeType' : ''}>
        <TypeLink >Регистрация</TypeLink>
      </Button>
    </Wrapper>
  )
}
