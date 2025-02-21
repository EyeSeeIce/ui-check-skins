import React, { ReactNode } from 'react';
import styles from './main-template.module.scss';
import { Header } from '../component/header';
import { SkinsSidebar } from '../component/skins-sidebar';
import { Route, Routes } from 'react-router';
import { VariantList } from '../../variant-list';

type Props = {
  children: ReactNode
}

export const MainTemplate = (props: Props) => {
  const { children } = props;
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <SkinsSidebar />
        <div className={styles.content}>
          <Routes>
            <Route path="weapon/:weapontype" element={children} />
            <Route path="weapon/:weapontype/variant/:defindex" element={<VariantList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};