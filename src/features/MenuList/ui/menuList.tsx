import { DownOutlined } from '@ant-design/icons';
import { Space, Dropdown } from 'antd';

import { onClick } from '../model/changePath';
import { items } from '../constants';

export const menuList = () => {

  return (
    <Dropdown menu={{ items, onClick }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
            Menu
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};


