import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AboutUs, Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Footer } from './container';
import { Navbar, Newsletter } from './components';
import './App.css';
import Main from './container/Main/Main';

const App = () => (
  <div>
    <BrowserRouter>
      {/* <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer /> */}
      <Routes>

        <Route path='/' element={<Main />} />
        <Route path='/booktable' element={<Newsletter />} />

      </Routes>
    </BrowserRouter>

    {/* <Intro /> */}

  </div>
);

export default App;
