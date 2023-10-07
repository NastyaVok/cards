import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

import { MenuList } from '../../../features/MenuList';

export const Navigation = () => {

  return (
    <Space direction="vertical" size={16}>
      <Space wrap size={16}>
        <MenuList />
        <Avatar size={50} icon={<UserOutlined />} />
      </Space>
    </Space> 
  );
};