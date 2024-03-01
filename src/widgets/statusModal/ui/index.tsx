import { AppDispatch } from "@app/store/store";
import { HOMEPAGE } from "@shared/data/constants/routes/route";
import { Modal, Result, Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "redux-first-history";

export const StatusModal:React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
      setIsModalOpen(true);
    }, [])

    const handleOk = () => {
      dispatch(push(HOMEPAGE))
      setIsModalOpen(false);
    };
  

  return (
    <Modal data-test-id='write-review-not-saved-modal'  
           centered={true}
           open={isModalOpen} 
           onOk={handleOk} 
           onCancel={handleOk}
           footer={null}
           >
        <Result    
            status="500"
            title="Что-то пошло не так"
            subTitle="Произошла ошибка, попробуйте еще раз"
            extra={<Button onClick={handleOk} type="primary">Назад</Button>}>  
        </Result>
    </Modal>
  )
}
