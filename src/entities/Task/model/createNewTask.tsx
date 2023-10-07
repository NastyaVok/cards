import { Modal, Typography } from 'antd';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../../shared/utils/hooks/useStore';
import { Input } from '../../../shared/ui';

interface Props {
    taskName: string,
    setTaskName: React.Dispatch<React.SetStateAction<string>>,
    addTask: () => void,
}

export const CreateNewTask = observer(({taskName, setTaskName, addTask}: Props) => {
  const {
    rootStore: { createNewTaskStore, cardId },
  } = useStore();
      
  cardId.getCardId;

  const handleOk = () => {
    setTaskName('');
    addTask();
    createNewTaskStore.setcreateNewTaskStore(false);
  };
  
  const handleCancel = () => {
    setTaskName('');
    createNewTaskStore.setcreateNewTaskStore(false);
  };

  return (
    <>
      <Modal title="Add New Task" 
      open={createNewTaskStore.getcreateNewTaskStore} 
      onOk={handleOk}
      onCancel={handleCancel}>
        <Typography>
            Please enter the name of task
        </Typography>
        <Input
            value={taskName}
            setValue={setTaskName}
            length={18}
        />
      </Modal>
    </>
  );
});