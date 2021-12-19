import classes from "./FAQ.module.scss"
import brandImg from "./../../../image/brand.png"
const FAQ = () => {
    return (
        <div className="wide">
            <div className={classes.faq}>
                <div className={classes.info}>
                    <h1>Generel Information</h1>
                    <h3>Eu dictumst cum at sed euismood condimentum?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                    <h3>Magna bibendum est fermentum eros.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                    <h3>Odio muskana hak eris conseekin sceleton?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                    <h3>Elit id blandit sabara boi velit gua mara?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                </div>
                <div className={classes.question}>
                    <h2>Ask a Question</h2>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="" placeholder="Your Name*" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="" placeholder="Subject*" />
                        </div>
                        <div className="form-group">
                            <textarea type="text" className="form-control" id="" placeholder="Type Your Message*" />
                        </div>
                        <button type="submit" className="btn primary">Send Mail</button>
                    </form>
                </div>
            </div>
            <div className={classes.brand}><img srcSet={`${brandImg} 2x`} alt="brand" /></div>
        </div>
    )
}

export default FAQ
