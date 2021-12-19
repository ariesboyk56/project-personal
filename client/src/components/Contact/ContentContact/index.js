import classes from "./ContentContact.module.scss"
import contactImg from "./../../../image/contact/contact.svg"
const ContentContact = () => {
    return (
        <div className="wide">
            <div className={classes.containerContact}>
                <div className={classes.rowUp}>
                    <div className={classes.rowUpL}>
                        <h1>Information About us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <ul className={classes.dotRowUpL}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className={classes.rowUpR}>
                        <h1>Contact Way</h1>
                        <div className={classes.dotRowUpR}>
                            <div>
                                <p className={classes.item1}>
                                    Tel: 877-67-88-99<br />
                                    E-Mail: shop@store.com
                                </p>
                                <p className={classes.item2}>
                                    20 Margaret st, London<br />
                                    Great britain, 3NM98-LK
                                </p>
                            </div>
                            <div>
                                <p className={classes.item3}>
                                    Support Forum<br />
                                    For over 24hr
                                </p>
                                <p className={classes.item4}>
                                    Free standard shipping<br />
                                    on all orders.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={classes.rowDown}>
                    <div>
                        <h1>Get In Touch</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                        
                        <form>
                            <div className={classes.onceRow}>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="" placeholder="Your Name*"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="" placeholder="Your E-mail"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="" placeholder="Subject*"/>
                            </div>
                            <div className="form-group">
                                <textarea type="text" className="form-control" id="" placeholder="Type Your Message*"/>
                            </div>
                        
                            
                        
                            <button type="submit" className="btn primary">Send Mail</button>
                        </form>
                        
                    </div>
                    <div className={classes.image}>
                        <img src={contactImg} alt="contact"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentContact
