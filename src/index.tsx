import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import store from './store/store';
import Header from './components/Header/header';
import Main from './Pages/Main/main';
import Second from './Pages/Second/second';
import Next from './Pages/Next/next';
import PageNotFound from './Pages/PageNotFound/pageNotFound';
import Footer from './components/Footer/footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <div className="wrapper">
        <div className="headerBox"><Header /></div>
        <div className="contentBox">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/second" element={<Second />} />
            <Route path="/next" element={<Next />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <div className="footerBox"><Footer /></div>
      </div>
    </HashRouter>
  </Provider>,
);
