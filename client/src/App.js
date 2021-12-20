
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './scss/app.scss'
import HeadingBar from './components/HeaderBar'
import HomePage from './components/HomePage';
import GlobalStyles from './components/GlobalStyles';
import Menu from './components/MenuBar';
import NotFound404 from './components/NotFound404';
import Contact from './components/Contact';
import About from './components/Contact/About';
import FAQ from './components/Contact/FAQ';
import ContentContact from './components/Contact/ContentContact';
import AuthForm from './components/AuthForm';
import Login from './components/AuthForm/Login';
import Register from './components/AuthForm/Register';

function App() {
    return (
        <GlobalStyles>
            <div className='grid'>
                <HeadingBar />
                <Menu />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="auth" element={<AuthForm />}>
                        <Route path="login" element={<Login />} /> 
                        <Route path="register" element={<Register />} /> 
                    </Route>
                    <Route path="contact" element={<Contact />}>
                        <Route path="" element={<ContentContact />} />
                        <Route path="about" element={<About />} />
                        <Route path="faq" element={<FAQ />} />
                    </Route>
                    <Route path="*" element={<NotFound404 />} />
                </Routes>
            </div>
        </GlobalStyles>

    );
}

export default App;