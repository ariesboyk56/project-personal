
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './scss/app.scss'
import HeadingBar from './components/HeaderBar'
import HomePage from './components/HomePage';
import GlobalStyles from './components/GlobalStyles';
import Menu from './components/MenuBar';

function App() {
  return (
    <GlobalStyles>
      <div className='grid'>
      <HeadingBar />
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>
    </div>
    </GlobalStyles>
    
  );
}

export default App;