import { HOMEPAGE } from "@shared/data/constants/routes/route";
import { useAppDispatch } from "@shared/hooks/store/redux";
import { Modal, Button } from "antd";
import { useEffect, useState } from "react";
import { push } from "redux-first-history";
import { ResultModal } from "./styled";

export const StatusModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleOk = () => {
    dispatch(push(HOMEPAGE));
    setIsModalOpen(false);
  };

  return (
    <Modal
      data-test-id="write-review-not-saved-modal"
      centered={true}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleOk}
      footer={null}
    >
      <ResultModal
        status="500"
        title="Что-то пошло не так"
        subTitle="Произошла ошибка, попробуйте еще раз"
        extra={
          <Button onClick={handleOk} type="primary">
            Назад
          </Button>
        }
      ></ResultModal>
    </Modal>
  );
};
