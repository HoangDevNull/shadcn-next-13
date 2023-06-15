import React from 'react';

import type { FCC } from '@/types';

import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

const MainLayout: FCC = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default MainLayout;
