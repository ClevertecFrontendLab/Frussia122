import { Props } from "../models/type";
import { CommentRate } from "./styled";
import { StarTwoTone } from "@ant-design/icons";
import { setRating } from "@app/store/reducers/feedbacks";
import { useAppDispatch } from "@shared/hooks/store/redux";

export const CustomRate: React.FC<Props> = ({ isDisabled, defaultValue }) => {
  const dispatch = useAppDispatch();

  const handleChange = (value: number) => {
    dispatch(setRating(value));
  };
  return (
    <CommentRate
      disabled={isDisabled}
      defaultValue={defaultValue}
      character={<StarTwoTone />}
      onChange={handleChange}
    />
  );
};
