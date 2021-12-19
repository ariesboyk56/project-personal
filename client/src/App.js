
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './scss/app.scss'
import HeadingBar from './components/HeaderBar'
import HomePage from './components/HomePage';
import GlobalStyles from './components/GlobalStyles';
import Menu from './components/MenuBar';
import NotFound404 from './components/NotFound404';
import Contact from './components/Contact';

function App() {
  return (
    <GlobalStyles>
      <div className='grid'>
      <HeadingBar />
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
    </GlobalStyles>
    
  );
}

export default App;