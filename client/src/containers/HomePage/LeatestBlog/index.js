import React from 'react'
import classes from './LeatestBlog.module.scss'
import blogImg from './../../../image/blog/frame3.png'

const LeatestBlog = () => {
    return (
        <div className="wide">
            <h1 className={classes.title}>Leatest Blog</h1>
            <div className={classes.leatestBlog}>
                <div className={classes.blog}>
                    <img srcSet={`${blogImg} 2x`} alt='blog' />
                    <div className={classes.content}>
                        <div className={classes.info}>
                            <span className={classes.author}><i className="fas fa-pen-nib"></i>Surfauxion</span>
                            <span className={classes.date}><i className="far fa-calendar-alt"></i>21 August,2020</span>
                        </div>
                        <h3 className={classes.titleBlog}>Top essential trends in 2021</h3>
                        <p className={classes.descBlog}>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                        <a href='#' className={classes.moreBlog}>Read More</a>
                    </div>
                </div>

                {/* copy 3 blogs: start */}
                <div className={classes.blog}>
                    <img srcSet={`${blogImg} 2x`} alt='blog' />
                    <div className={classes.content}>
                        <div className={classes.info}>
                            <span className={classes.author}><i className="fas fa-pen-nib"></i>Surfauxion</span>
                            <span className={classes.date}><i className="far fa-calendar-alt"></i>21 August,2020</span>
                        </div>
                        <h3 className={classes.titleBlog}>Top essential trends in 2021</h3>
                        <p className={classes.descBlog}>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                        <a href='#' className={classes.moreBlog}>Read More</a>
                    </div>
                </div>
                <div className={classes.blog}>
                    <img srcSet={`${blogImg} 2x`} alt='blog' />
                    <div className={classes.content}>
                        <div className={classes.info}>
                            <span className={classes.author}><i className="fas fa-pen-nib"></i>Surfauxion</span>
                            <span className={classes.date}><i className="far fa-calendar-alt"></i>21 August,2020</span>
                        </div>
                        <h3 className={classes.titleBlog}>Top essential trends in 2021</h3>
                        <p className={classes.descBlog}>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                        <a href='#' className={classes.moreBlog}>Read More</a>
                    </div>
                </div>
                {/* copy 3 blogs: end */}
            </div>
        </div>
    )
}

export default LeatestBlog
