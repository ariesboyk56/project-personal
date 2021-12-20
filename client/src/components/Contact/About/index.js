import clsx from 'clsx'
import classes from "./About.module.scss"
import aboutImg from "./../../../image/about/about.png"
import img1 from './../../../image/offer/free-delivery1.png'
import img2 from './../../../image/offer/cashback1.png'
import img3 from './../../../image/offer/premium-quality1.png'
import img4 from './../../../image/offer/group.png'
import clientImg2 from './../../../image/about/client2.png'
import clientImg3 from './../../../image/about/client3.png'
const clientData = [
    {   
        isCheck: true,
        name: "Selina Gomez",
        service: "Ceo At Webecy Digital",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam.Tristique ultrices dolor aliquam lacus volutpat praesent."
    },
    {
        isCheck: false,
        name: "Gomez",
        service: "Designer At Webecy Digital",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam.Tristique ultrices dolor aliquam lacus volutpat praesent."
    },
    {
        isCheck: false,
        name: "Selina",
        service: "Coder At Webecy Digital",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam.Tristique ultrices dolor aliquam lacus volutpat praesent."
    },
]
const About = () => {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    window.addEventListener("load", function () {
        const avtItems = $$(`.${classes.avtItem}`)
        const dotItems = $$(`.${classes.dotItem}`)
        const infoClients = $$(`.${classes.infoClient}`)
        avtItems.forEach((item, index) => {
            item.onclick = () => {
                $(`.${classes.avtItem}.${classes.active}`).classList.remove(`${classes.active}`);
                $(`.${classes.dotItem}.${classes.active}`).classList.remove(`${classes.active}`);
                item.classList.add(`${classes.active}`);
                dotItems[index].classList.add(`${classes.active}`);
                for(var i = 0; i < infoClients.length; i++){
                    if(i !== index){
                        infoClients[i].style.display = "none"
                    } else {
                        infoClients[i].style.display = "block"
                    }
                }
            }
        });
    })
    const showInfoClient = (clientData) => {
        return clientData.map((client, index) => {
            return <div key={index} className={classes.infoClient}>
                <p className={classes.nameClient}>{client.name}</p>
                <p className={classes.serviceClient}>{client.service}</p>
                <p className={classes.descClient}>{client.description}</p>
            </div>
        })
    }


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
                        <img className={clsx(classes.avtItem, classes.active)} srcSet={`${clientImg3} 2x`} alt='offerimage' />
                        <img className={classes.avtItem} srcSet={`${clientImg2} 2x`} alt='offerimage' />
                        <img className={classes.avtItem} srcSet={`${clientImg2} 2x`} alt='offerimage' />
                    </div>
                <div className={classes.wrapClient}>{showInfoClient(clientData)}</div>
                </div>
                <ul className={classes.dotList}>
                    <li className={clsx(classes.dotItem, classes.active)}></li>
                    <li className={classes.dotItem}></li>
                    <li className={classes.dotItem}></li>
                </ul>
            </div>
        </div>
    )
}

export default About
