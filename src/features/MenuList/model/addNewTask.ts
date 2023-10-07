import { Dispatch } from 'react';

import { Tasks } from '../../../shared/types/types';

export const addNewTask = (columns: Tasks, setColumns: Dispatch<React.SetStateAction<Tasks>>) => {
    if (Object.keys(columns).length === 0) return;
    const firstColumnId = Object.keys(columns)[0];
    let newTaskId = 0;
    for (const key in columns) {
      const column = columns[key].items.length;
      newTaskId +=column;
    }
    newTaskId+1;
    columns[firstColumnId].items.push({id: String(newTaskId), title: 'test', description: 'test'});
    setColumns({
      ...columns,
    }); 
  };