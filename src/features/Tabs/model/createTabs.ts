import { Tasks } from '../../../shared/types/types';

import type { TabsProps } from 'antd';

export const createTabs = (columns: Tasks) => {
    const tabs: TabsProps['items'] = [];
    for (const key in columns) {
      const column = columns[key].name;
      tabs.push({key: key, label: column});
    }
    return tabs;
  };