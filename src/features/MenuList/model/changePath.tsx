import type { MenuProps } from 'antd';

export const onClick: MenuProps['onClick'] = ({ key }) => {
  console.log(key);
  //routing
};