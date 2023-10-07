import { MouseEventHandler } from 'react';
import cn from 'classnames';
import { Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

interface Props {
    text: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    classes?: string, 
}

export const Add = ({text, onClick, classes}: Props) => {

    return(    
    <Button 
    type="primary" 
    icon={<PlusCircleFilled />}
    className={cn(classes)}
    onClick={onClick}
    >
    {text}
  </Button>
    )
}