import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './scss/app.scss'
import HeadingBar from './components/HeaderBar'
import HomePage from './containers/HomePage';
// import GlobalStyles from './components/GlobalStyles';
import Menu from './components/MenuBar';
import NotFound404 from './components/NotFound404';
import Contact from './containers/Contact';
import About from './containers/Contact/About';
import FAQ from './containers/Contact/FAQ';
import ContentContact from './containers/Contact/ContentContact';
import AuthForm from './components/AuthForm';
import Login from './components/AuthForm/Login';
import Register from './components/AuthForm/Register';
import Products from './containers/Products';
import AuthContextProvider from './contexts/AuthContext';
import ProductContextProvider from './contexts/ProductContext';
import ProductDetail from './containers/Products/ProductDetail';
import Cart from './containers/Cart';
import CartContent from './containers/Cart/CartContent';
import StatusOrders from './containers/Cart/StatusOrders';
import AdminDashboard from './containers/AdminDashboard';
import Admin from './containers/layouts/Admin';
import PrivateRoute from './utils/PrivateRoute';

function App() {
    return (
        <AuthContextProvider>
            <ProductContextProvider>
                <div className='grid' style={{ overflow: "hidden" }}>
                    <HeadingBar />
                    <Menu />
                    <Routes>
                        <Route path="admin" element={
                            <PrivateRoute>
                                <Admin />
                            </PrivateRoute>
                        }>
                            <Route path="" element={<AdminDashboard />} />
                        </Route>
                        <Route path="/" element={<HomePage />} />
                        <Route path="auth" element={<AuthForm />}>
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </Route>
                        <Route path="products" element={<Products />} />
                        <Route path="products/:name" element={<ProductDetail />} />
                        <Route path="contact" element={<Contact />}>
                            <Route path="" element={<ContentContact />} />
                            <Route path="about" element={<About />} />
                            <Route path="faq" element={<FAQ />} />
                        </Route>
                        <Route path="orders" element={<Cart />} >
                            <Route path="" element={<CartContent />} />
                            <Route path=":id" element={<StatusOrders />} />
                        </Route>
                        <Route path="*" element={<NotFound404 />} />
                    </Routes>
                </div>
            </ProductContextProvider>
        </AuthContextProvider>

    );
}

export default App;