import { MouseEventHandler } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import cn from 'classnames';

import { Item } from '../../../../shared/types/types';
import { DeleteIcon } from '../../../../shared/ui';
import { useStore } from '../../../../shared/utils/hooks/useStore';

import styles from './task.module.css';

import type { DraggableProvided } from 'react-beautiful-dnd';

const { Meta } = Card;

interface Props extends Item {
    style: React.CSSProperties,
    providedDraggable: DraggableProvided,
    classes?: string,
    onClick:  MouseEventHandler<HTMLButtonElement>
}

export const CardRow = observer((props: Props) => {
  const {
    rootStore: { editCardStore, cardId },
  } = useStore();
  cardId.getCardId;

  return (
    <>
      <Card 
        ref={props.providedDraggable.innerRef}
        {...props.providedDraggable.draggableProps}
        {...props.providedDraggable.dragHandleProps}
        style={props.style} 
        className={cn(styles.task, props.classes)} 
        actions={[
          <EditOutlined key="edit" onClick={() => editCardStore.setEditCardStore(true)}/>,
        ]}
      >
        <div className={styles.titles}>
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"/>}
          title={props.title}
          description={props.description}      
        />
        <DeleteIcon 
        onClick={props.onClick}
        />
        </div>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  );
});