import React from 'react';
import Main from '../components/Main';
import Social from '../components/extra/Social';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AppRouter = () => (
  <div className="global-wrapper">
  	<div className="overlay" />
  	<Social />
    <Header />
    <Main />
    <Footer />
  </div>
);

export default AppRouter;