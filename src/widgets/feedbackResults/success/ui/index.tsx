import { ResultInfo } from "@features/feedbackModal/ui/styled";
import { CommentButton } from "./styled";
import { Props } from "../../models/type";

export const Success: React.FC<Props> = ({ statusHandle }) => {
  return (
    <ResultInfo
      status="success"
      title="Отзыв успешно опубликован"
      extra={[
        <CommentButton onClick={() => statusHandle("success")}>
          Отлично
        </CommentButton>,
      ]}
    />
  );
};
