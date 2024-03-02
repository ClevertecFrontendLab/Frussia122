import { Wrapper, ReviewLink } from "./styled";
import { FooterCard } from "../cardData/data";
import { CardLayout } from "@shared/layouts/card";
import { AUTH, FEEDBACK } from "@shared/data/constants/routes/route";
import { push } from "redux-first-history";
import { getFeedbacks } from "@app/store/actions/api/getFeedbacks";
import { clearErrors, getErrorSelector } from "@app/store/reducers/feedbacks";
import { useAppDispatch, useAppSelector } from "@shared/hooks/store/redux";
import { logout, tokenSelector } from "@app/store/reducers/user";

export const MainFooter = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(getErrorSelector);
  const token = useAppSelector(tokenSelector);

  const handleClick = async () => {
    try {
      await dispatch(getFeedbacks({ token }));
      if (error) {
        if (error === 403) {
          localStorage.removeItem("token");
          dispatch(logout());
          dispatch(clearErrors());
          dispatch(push(AUTH));
        }
      }
      dispatch(push(FEEDBACK));
    } catch (err: any) {
      throw new Error(err);
    }
  };

  return (
    <Wrapper>
      <ReviewLink onClick={handleClick} data-test-id="see-reviews">
        Смотреть отзывы
      </ReviewLink>
      <CardLayout
        data={FooterCard}
        customstyle={{
          headercolor: "#2f54eb",
          headerfontsize: 16,
          contentcolor: "#8c8c8c",
          footerfontsize: 14,
        }}
      />
    </Wrapper>
  );
};
