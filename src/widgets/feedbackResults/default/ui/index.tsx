import { DefaultProps } from "../../models/type";
import { CustomRate } from "@shared/components/rate";
import { TextArea } from "./styled";
import { useAppDispatch } from "@shared/hooks/store/redux";
import { setMessage } from "@app/store/reducers/feedbacks";

export const Default: React.FC<DefaultProps> = ({ rating, message }) => {
  const dispatch = useAppDispatch();
  let timeoutId: any = null;

  const handleDebounce = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentMessage = e.target.value;
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      dispatch(setMessage(currentMessage));
    }, 300);
  };
  return (
    <>
      <CustomRate isDisabled={false} defaultValue={rating} />
      <TextArea
        placeholder="Расскажите, почему вам понравилось наше приложение"
        defaultValue={message}
        onChange={(e) => handleDebounce(e)}
        rows={4}
      />
    </>
  );
};
