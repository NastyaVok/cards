import { MouseEventHandler } from 'react';
import cn from 'classnames';
import { Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

interface Props {
    text: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    classes?: string, 
}

export const Delete = ({text, onClick, classes}: Props) => {

    return(    
    <Button 
    type="primary" 
    icon={<CloseCircleOutlined />}
    className={cn(classes)}
    onClick={onClick}
    >
    {text}
  </Button>
    )
}