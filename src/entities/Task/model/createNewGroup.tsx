import { Modal, Typography } from 'antd';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../../shared/utils/hooks/useStore';
import { Input } from '../../../shared/ui';

interface Props {
    rowName: string,
    setRowName: React.Dispatch<React.SetStateAction<string>>,
    addGroup: () => void,
}

export const CreateNewGroup = observer(({rowName, setRowName, addGroup}: Props) => {
  const {
    rootStore: { createNewGroupStore, cardId },
  } = useStore();
      
  cardId.getCardId;

  const handleOk = () => {
    setRowName('');
    addGroup();
    createNewGroupStore.setCreateNewGroupStore(false);
  };
  
  const handleCancel = () => {
    setRowName('');
    createNewGroupStore.setCreateNewGroupStore(false);
  };

  return (
    <>
      <Modal title="Add New Row" 
      open={createNewGroupStore.getCreateNewGroupStore} 
      onOk={handleOk}
      onCancel={handleCancel}>
        <Typography>
            Please enter the name of row
        </Typography>
        <Input
            value={rowName}
            setValue={setRowName}
            length={18}
        />
      </Modal>
    </>
  );
});