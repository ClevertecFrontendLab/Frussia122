import { Wrapper, Button, TypeLink } from "./styled";
import { Props } from "../models/types";

import { push } from "redux-first-history";
import { AUTH, REGISTRATION } from "@shared/data/constants/routes/route";
import { useAppDispatch } from "@shared/hooks/store/redux";
export const AuthTabs: React.FC<Props> = ({ type }) => {
  const dispatch = useAppDispatch();

  const handleClick = (to: string) => {
    dispatch(push(to));
  };

  return (
    <Wrapper>
      <Button
        onClick={() => handleClick(AUTH)}
        className={type === "/auth" ? "activeType" : ""}
      >
        <TypeLink>Вход</TypeLink>
      </Button>
      <Button
        onClick={() => handleClick(`${AUTH}/${REGISTRATION}`)}
        className={type != "/auth" ? "activeType" : ""}
      >
        <TypeLink>Регистрация</TypeLink>
      </Button>
    </Wrapper>
  );
};
