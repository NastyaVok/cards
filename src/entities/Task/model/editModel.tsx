import { Modal } from 'antd';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../../shared/utils/hooks/useStore';

export const EditCard = observer(() => {
  const {
    rootStore: { editCardStore, cardId },
  } = useStore();
      
  cardId.getCardId;

  const handleOk = () => {
    editCardStore.setEditCardStore(false);
  };
  
  const handleCancel = () => {
    editCardStore.setEditCardStore(false);
  };

  return (
    <>
      <Modal title="Basic Modal" open={editCardStore.getEditCardStore} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
});