import React, { useState, useEffect} from 'react';
import { Typography, Space } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import cn from 'classnames';

import { Tasks } from '../../shared/types/types';
import { EditCard } from '../../entities/Task/model/editModel';
import { CardRow } from '../../entities/Task/ui/TaskRow';
import { addNewTask, deleteTask} from '../../features/Task';
import { createTabs } from '../../features/Tabs';
import { addNewGroup, deleteTable, onDragEnd } from '../../features/Tasks';
import { Delete, Tabs } from '../../shared/ui';
import { CreateNewGroup } from '../../entities/Task/model/createNewGroup';
import { Task, Group } from '../../entities/Task';
import { CreateNewTask } from '../../entities/Task/model/createNewTask';

import styles from './tasks.module.css';

import type { TabsProps } from 'antd';


const { Title } = Typography;

const itemsFromBackend = [
  {id: '0', title: 'FirstTask', description: 'FirstTask'},
  {id: '1', title: 'FirstTask', description: 'SecondTask'},
  {id: '2', title: 'FirstTask', description: 'ThirdTask'},
  {id: '3', title: 'FirstTask', description: 'FourthTask'},
];

const itemsFromBackend2 = [
  {id: '4', title: 'FirstTask', description: 'FirstTask'},
  {id: '5', title: 'FirstTask', description: 'SecondTask'},
  {id: '6', title: 'FirstTask', description: 'ThirdTask'},
  {id: '7', title: 'FirstTask', description: 'FourthTask'},
];

const columnsFromBackend = 
    {
      0: {
        name: 'Todo',
        items: itemsFromBackend,
      },
      1: {
        name: 'Implemenatation',
        items: itemsFromBackend2,
      },
    };

export const TaskListPage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [columns, setColumns] = useState<Tasks>(columnsFromBackend);
  const [active, setActive] = useState(0);
  const [tabs, setTabs] = useState<TabsProps['items']>(createTabs(columns)); 
  const [rowName, setRowName] = useState('');
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    const handleResize = (event: Event) => {
      const target = event.target as Window;
      setWidth(target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setTabs(createTabs(columns));
  }, [columns]);

  const isMobile = (id:number) => {
    if(width < 601) {
      if (id === active) {
        return styles.mobile__screen;
      } else {
        return styles.none;
      }
    }
    return styles.full__screen;
  };

  console.log(tabs, columns, active)

  return (
    <>

      <div style={{overflow: 'hidden', width:'100%'}}>

        <Group />
        <CreateNewGroup 
            rowName={rowName}
            setRowName={setRowName}
            addGroup={() => addNewGroup(columns, setColumns, rowName)}
        />

    <Task />
    <CreateNewTask 
    taskName={taskName}
    setTaskName={setTaskName}
    addTask={() => addNewTask(columns, setColumns, taskName)}
    />

  

<div className={cn(width < 601 ? '' : styles.none)}>
    <Tabs 
    items={tabs} 
    setActive={setActive}
    >
    </Tabs>
    </div>

        <div className={cn(styles.container, width < 601 ? styles.container__item : '' )}>
          <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)} >
            {Object.entries(columns).map(([idParent, column], indexParent) => {
              return (
                <div 
                  key={idParent} 
                  className={cn(styles.wrapper, isMobile(indexParent))}>
                    <div className={styles.title}>
                        <Title 
                        level={3}
                        className={styles.header}
                        >{column.name}</Title>
                        <Delete
                        text={'Delete'}
                        onClick={() => {deleteTable(idParent, columns, setColumns), setActive(tabs?(tabs.length-1):0)}}
                        />
                  </div>
                    <Droppable droppableId={idParent} key={idParent}>
                      {(provided, snapshot) => {
                        return (
                          <Space size={[8, 16]} wrap>
                            <div
                              ref={provided.innerRef}
                              style={{
                                background: snapshot.isDraggingOver ? 'lightblue' : 'inherit',
                              }}
                              className={styles.column}
                              {...provided.droppableProps}
                            >
                              {column.items.map(({id, title, description}, index) => {
                                return (
                                  <div key={id}
                                    className={styles.content}
                                  >
                                    <Draggable key={id} draggableId={id} index={index}>
                                      {(provided, snapshot) => {
                                        return (
                                          <>
                                            <CardRow
                                              classes={styles.draggable}
                                              style={{
                                                borderColor: snapshot.isDragging ? 'green' 
                                                  : 'black',
                                                ...provided.draggableProps.style,
                                              }}
                                              providedDraggable={provided}
                                              id={id}
                                              title={title}
                                              description={description}
                                              onClick={() => deleteTask(idParent, index, columns, setColumns)}
                                            />
                                          </>
                                        );
                                      }}
                                    </Draggable>
                                  </div>
                                );
                              })}
                              {provided.placeholder}
                            </div>
                          </Space>
                        );
                      }}
                    </Droppable>
                </div>
              );
            })}
          </DragDropContext>
        </div>
        <EditCard />
      </div>
    </>
  );
};