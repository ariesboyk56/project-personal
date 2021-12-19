import classes from './NotFound404.module.scss'
import Footer from '../Footer'
import {useNavigate} from 'react-router-dom'
import notFoundImg from './../../image/NotFound404.svg' 
import brandImg from './../../image/brand.png' 
const NotFound404 = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }
    return (
        
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className={classes.container}>
                    <div className={classes.notFoundImg}>
                        <img src={notFoundImg} alt='not found'/>
                        <span>oOPs! The page you requested was not found!</span>
                        <button onClick={()=>handleClick()} className='btn primary'>Back To Home</button>
                    </div>
                <img className={classes.brandImg} srcSet={`${brandImg} 2x`} alt='not found'/>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}

export default NotFound404
