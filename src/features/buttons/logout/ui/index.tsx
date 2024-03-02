import { Wrapper, Icon } from "./styled";
import exit from "../images/Exit.svg";
import { Props } from "../models/types";
import { push } from "redux-first-history";
import { AUTH } from "@shared/data/constants/routes/route";
import { logout } from "@app/store/reducers/user";
import { useAppDispatch } from "@shared/hooks/store/redux";

export const Logout: React.FC<Props> = ({ collapsed, screenWidth = 0 }) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    dispatch(push(AUTH));
  };
  return (
    <Wrapper collapsed={collapsed} onClick={handleLogout}>
      {!collapsed && screenWidth > 600 ? <Icon src={exit} /> : null}
      {collapsed && screenWidth > 600 ? <Icon src={exit} /> : null}
      {collapsed ? "" : "Выход"}
    </Wrapper>
  );
};
