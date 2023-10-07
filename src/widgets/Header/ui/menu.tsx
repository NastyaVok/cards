import { Menu as MenuAnt } from 'antd';

export const Menu = () => {

  return (
    <MenuAnt
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      items={new Array(4).fill(null).map((_, index) => {
        const key = index + 1;
        return {
          key,
          label: `nav ${key}`,
        };
      })}
    /> 
  );
};