import { observer } from 'mobx-react-lite';

import { Add } from '../../../../shared/ui';
import { useStore } from '../../../../shared/utils/hooks/useStore';

export const Group = observer(() => {
  const {
    rootStore: { createNewGroupStore, cardId },
  } = useStore();
  cardId.getCardId;

  return (
    <>
    <Add 
        text={'Add new Row'}
        onClick={() => createNewGroupStore.setCreateNewGroupStore(true)}
    />
    </>
  );
});