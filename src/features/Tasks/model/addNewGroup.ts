import { Dispatch } from 'react';

import { Tasks } from '../../../shared/types/types';

export const addNewGroup = (columns: Tasks, setColumns: Dispatch<React.SetStateAction<Tasks>>, nameRow: string) => {
  const columnLength = Object.keys(columns).length;
  let newColumnId = '1';
  if (columnLength !== 0) {
    const lastColumnId = Object.keys(columns)[columnLength-1];
    newColumnId = String(Number(lastColumnId) + 1);
  }
  setColumns({
    ...columns,
    [newColumnId]: {
      name: nameRow,
      items: [],
    },
  }); 
};