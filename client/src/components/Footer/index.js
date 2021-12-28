import classes from './Footer.module.scss'
import React from 'react';
import clsx from 'clsx'
const Footer = () => {
    return (
        <>
        <div className={clsx( classes.container)}>
            <div className="wide row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <h3 className={clsx(classes.title, classes.titleLogo)}>Hekto</h3>
                    <div className={classes.contact}>
                        <input type="text" placeholder="Enter Email Address" />
                        <button className="btn primary">Sign Up</button>
                    </div>
                    <div className={classes.contactInfo}>
                        <span>Contact Info</span>
                        <span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
                    </div>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <h3 className={classes.title}>Catagories</h3>
                            <ul>
                                <li>Laptops &amp; Computers</li>
                                <li>Cameras &amp; Photography</li>
                                <li>Smart Phones &amp; Tablets</li>
                                <li>Video Games &amp; Consoles</li>
                                <li>Waterproof Headphones</li>
                            </ul>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <h3 className={classes.title}>Customer Care</h3>
                            <ul>
                                <li>My Account</li>
                                <li>Discount</li>
                                <li>Returns</li>
                                <li>Orders History</li>
                                <li>Order Tracking</li>
                            </ul>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <h3 className={classes.title}>Pages</h3>
                            <ul>
                                <li>Blog</li>
                                <li>Browse the Shop</li>
                                <li>Category</li>
                                <li>Pre-Built Pages</li>
                                <li>Visual Composer Elements</li>
                                <li>WooCommerce Pages</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className={clsx(classes.footbar)}>
                <div className={clsx('wide', classes.content)}>
                    <span>©Webecy - All Rights Reserved</span>
                    <ul>
                        <li><i className="fab fa-facebook"></i></li>
                        <li><i className="fab fa-instagram-square"></i></li>
                        <li><i className="fab fa-twitter-square"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        </>

    )
}

export default Footer
