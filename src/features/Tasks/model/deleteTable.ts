import { Dispatch } from 'react';

import { Tasks } from '../../../shared/types/types';

export const deleteTable = (id:string, columns: Tasks, setColumns: Dispatch<React.SetStateAction<Tasks>>) => {
    delete columns[id];
    setColumns({
      ...columns,
    });
  };