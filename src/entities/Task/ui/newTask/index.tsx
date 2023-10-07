import { observer } from 'mobx-react-lite';

import { Add } from '../../../../shared/ui';
import { useStore } from '../../../../shared/utils/hooks/useStore';

export const Task = observer(() => {
  const {
    rootStore: { createNewTaskStore, cardId },
  } = useStore();
  cardId.getCardId;

  return (
    <>
    <Add 
        text={'Add new Task'}
        onClick={() => createNewTaskStore.setcreateNewTaskStore(true)}
    />
    </>
  );
});