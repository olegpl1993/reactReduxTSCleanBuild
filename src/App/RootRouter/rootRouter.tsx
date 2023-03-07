import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Main from '../../Pages/Main/main';
import Disposable from '../../Pages/Second/second';
import Vapes from '../../Pages/Next/next';
import PageNotFound from '../../Pages/PageNotFound/pageNotFound';

export default function RootRouter() {
  return (
    <div className="wrapper">
      <div className="headerBox"><Header /></div>
      <div className="contentBox">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/second" element={<Disposable />} />
          <Route path="/next" element={<Vapes />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <div className="footerBox"><Footer /></div>
    </div>
  );
}
