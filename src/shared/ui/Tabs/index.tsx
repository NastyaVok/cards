import { Tabs as TabsAnt } from 'antd';

import type { TabsProps } from 'antd';

interface Props {
    items: TabsProps['items'] | undefined,
    setActive: React.Dispatch<React.SetStateAction<number>>,
    children?: never[]
}

export const Tabs = ({ items , setActive }: Props) => {
    const onChange = (key: string) => {
        setActive(Number(key));
      };

    return (
        <TabsAnt 
            centered
            defaultActiveKey="0" 
            items={items} 
            onChange={onChange}
        /> 
    )
}