import { MouseEventHandler } from 'react';
import cn from 'classnames';
import { Button } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>,
    classes?: string,
}

export const DeleteIcon = ({onClick, classes}: Props) => {

    return(
        <Button 
        type="primary" 
        shape="circle" 
        icon={<DeleteFilled />} 
        className={cn(classes)}
        onClick={onClick}
        />
    )
}