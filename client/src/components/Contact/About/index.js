import classes from "./About.module.scss"
import aboutImg from "./../../../image/about/about.png"
import img1 from './../../../image/offer/free-delivery1.png'
import img2 from './../../../image/offer/cashback1.png'
import img3 from './../../../image/offer/premium-quality1.png'
import img4 from './../../../image/offer/group.png'
import clientImg2 from './../../../image/about/client2.png'
import clientImg3 from './../../../image/about/client3.png'
const About = () => {
    return (
        <div className={classes.about}>
            <div className="wide">
                <div className={classes.aboutUs}>
                    <img srcSet={`${aboutImg} 2x`} alt="about us" />
                    <div >
                        <h1>Know About Our Ecomerce Business, History</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <button className="btn primary">Contact Us</button>
                    </div>
                </div>

                <div className={classes.aboutOffer}>
                    <h1>Our Features</h1>
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <div className={classes.offerContent}>
                                <img srcSet={`${img1} 2x`} alt='offerimage' />
                                <h3>Free Delivery</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                            </div>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <div className={classes.offerContent}>
                                <img srcSet={`${img2} 2x`} alt='offerimage' />
                                <h3>100% Cash Back</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                            </div>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <div className={classes.offerContent}>
                                <img srcSet={`${img3} 2x`} alt='offerimage' />
                                <h3>Quality Product</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                            </div>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <div className={classes.offerContent}>
                                <img srcSet={`${img4} 2x`} alt='offerimage' />
                                <h3>24/7 Support</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className={classes.aboutClient}>
                <h1>Our Client Say!</h1>
                <div className={classes.clientContent}>
                    <div className={classes.avtClient}>
                        <img srcSet={`${clientImg2} 2x`} alt='offerimage' />
                        <img srcSet={`${clientImg3} 2x`} alt='offerimage' />
                        <img srcSet={`${clientImg2} 2x`} alt='offerimage' />
                    </div>
                    <div className={classes.infoClient}>
                        <p className={classes.nameClient}>Selina Gomez</p>
                        <p className={classes.serviceClient}>Ceo At Webecy Digital</p>
                        <p className={classes.descClient}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam.
                            Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                    </div>
                </div>
                <ul className={classes.dotList}>
                    <li className={classes.dotItem}></li>
                    <li className={classes.dotItem}></li>
                    <li className={classes.dotItem}></li>
                </ul>
            </div>
        </div>
    )
}

export default About
