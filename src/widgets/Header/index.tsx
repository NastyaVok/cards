import React from 'react';
import { Layout } from 'antd';

import { Navigation } from './ui/navigation';
import { Menu } from './ui/menu';
import styles from './header.module.css';

const { Header } = Layout;

export const HeaderWidget = () => {

  return (
    <>
      <Layout className="layout">
        <Header 
          className={styles.header}
        >
          <div className="demo-logo" />
          <Menu />
          <Navigation />
        </Header>
      </Layout>
    </>
  );
};

