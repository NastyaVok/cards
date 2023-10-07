import { Dispatch } from 'react';

import { Tasks } from '../../../shared/types/types';

export const deleteTask = (id:string, index:number, columns: Tasks, 
    setColumns: Dispatch<React.SetStateAction<Tasks>>) => {
    const currentColumn = columns[id];
    currentColumn.items.splice(index, 1);
    setColumns({
      ...columns,
    });
  };
  