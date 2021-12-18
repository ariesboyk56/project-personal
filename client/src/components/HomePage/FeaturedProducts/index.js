import classes from "./FeaturedProducts.module.scss";
import clsx from 'clsx'
import imgtest from './../../../image/products/image1168.png'
// const data = [
//     url: "./img/image1168.png",
//   name: "Cantilever chair",
//   color: ["blue", "pink", "green"],
//   code: "Y523201",
//   price: 42.0,
// ];
const FeaturedProducts = () => {
  //   const showProduct = (data) => {
  //     var result = null;
  //     data.map((item: any, index: any) => {
  //       result = (
  //         <>
  //           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  //             <h1 className={classes.title}>Featured Products</h1>
  //           </div>

  //           <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
  //             <div className="featuredImg">
  //               <img src="" alt="" />
  //             </div>
  //             <div className="featuredInfo">
  //               <span className="featuredName"></span>
  //               <div className="featuredColor"></div>
  //               <span className="featuredCode">Code - </span>
  //               <span className="featuredPrice">$</span>
  //             </div>
  //           </div>
  //         </>
  //       );
  //     });
  //     return result;
  //   };
  return <>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h1 className={classes.title}>Featured Products</h1>
      </div>
    </div>

    <div className={clsx(classes.wrapperFeature, 'row')}>

      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className={classes.featuredProduct}>
          <ul className={classes.featuredAction}>
            <li><i className="fas fa-shopping-cart"></i></li>
            <li><i className="far fa-heart"></i></li>
            <li><i className="fas fa-search-plus"></i></li>
          </ul>
          <a href="/" className={classes.featuredBtn}>View Details</a>
          <div className={classes.featuredImg}>
            <img srcSet={`${imgtest} 2x`} alt="image1168" />
          </div>
          <div className={classes.featuredInfo}>
            <p className={classes.featuredName}>Cantilever chair</p>
            <ul className={classes.featuredColor}>
              <li className={classes.colorGreen}></li>
              <li className={classes.colorPink}></li>
              <li className={classes.colorBlue}></li>
            </ul>
            <span className={classes.featuredCode}>Code - Y523201</span>
            <span className={classes.featuredPrice}>$42.00</span>
          </div>
        </div>
      </div>

      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className={classes.featuredProduct}>
          <ul className={classes.featuredAction}>
            <li><i className="fas fa-shopping-cart"></i></li>
            <li><i className="far fa-heart"></i></li>
            <li><i className="fas fa-search-plus"></i></li>
          </ul>
          <a href="/" className={classes.featuredBtn}>View Details</a>
          <div className={classes.featuredImg}>
            <img srcSet={`${imgtest} 2x`} alt="image1168" />
          </div>
          <div className={classes.featuredInfo}>
            <p className={classes.featuredName}>Cantilever chair</p>
            <ul className={classes.featuredColor}>
              <li className={classes.colorGreen}></li>
              <li className={classes.colorPink}></li>
              <li className={classes.colorBlue}></li>
            </ul>
            <span className={classes.featuredCode}>Code - Y523201</span>
            <span className={classes.featuredPrice}>$42.00</span>
          </div>
        </div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className={classes.featuredProduct}>
          <ul className={classes.featuredAction}>
            <li><i className="fas fa-shopping-cart"></i></li>
            <li><i className="far fa-heart"></i></li>
            <li><i className="fas fa-search-plus"></i></li>
          </ul>
          <a href="/" className={classes.featuredBtn}>View Details</a>
          <div className={classes.featuredImg}>
            <img srcSet={`${imgtest} 2x`} alt="image1168" />
          </div>
          <div className={classes.featuredInfo}>
            <p className={classes.featuredName}>Cantilever chair</p>
            <ul className={classes.featuredColor}>
              <li className={classes.colorGreen}></li>
              <li className={classes.colorPink}></li>
              <li className={classes.colorBlue}></li>
            </ul>
            <span className={classes.featuredCode}>Code - Y523201</span>
            <span className={classes.featuredPrice}>$42.00</span>
          </div>
        </div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className={classes.featuredProduct}>
          <ul className={classes.featuredAction}>
            <li><i className="fas fa-shopping-cart"></i></li>
            <li><i className="far fa-heart"></i></li>
            <li><i className="fas fa-search-plus"></i></li>
          </ul>
          <a href="/" className={classes.featuredBtn}>View Details</a>
          <div className={classes.featuredImg}>
            <img srcSet={`${imgtest} 2x`} alt="image1168" />
          </div>
          <div className={classes.featuredInfo}>
            <p className={classes.featuredName}>Cantilever chair</p>
            <ul className={classes.featuredColor}>
              <li className={classes.colorGreen}></li>
              <li className={classes.colorPink}></li>
              <li className={classes.colorBlue}></li>
            </ul>
            <span className={classes.featuredCode}>Code - Y523201</span>
            <span className={classes.featuredPrice}>$42.00</span>
          </div>
        </div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className={classes.featuredProduct}>
          <ul className={classes.featuredAction}>
            <li><i className="fas fa-shopping-cart"></i></li>
            <li><i className="far fa-heart"></i></li>
            <li><i className="fas fa-search-plus"></i></li>
          </ul>
          <a href="/" className={classes.featuredBtn}>View Details</a>
          <div className={classes.featuredImg}>
            <img srcSet={`${imgtest} 2x`} alt="image1168" />
          </div>
          <div className={classes.featuredInfo}>
            <p className={classes.featuredName}>Cantilever chair</p>
            <ul className={classes.featuredColor}>
              <li className={classes.colorGreen}></li>
              <li className={classes.colorPink}></li>
              <li className={classes.colorBlue}></li>
            </ul>
            <span className={classes.featuredCode}>Code - Y523201</span>
            <span className={classes.featuredPrice}>$42.00</span>
          </div>
        </div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className={classes.featuredProduct}>
          <ul className={classes.featuredAction}>
            <li><i className="fas fa-shopping-cart"></i></li>
            <li><i className="far fa-heart"></i></li>
            <li><i className="fas fa-search-plus"></i></li>
          </ul>
          <a href="/" className={classes.featuredBtn}>View Details</a>
          <div className={classes.featuredImg}>
            <img srcSet={`${imgtest} 2x`} alt="image1168" />
          </div>
          <div className={classes.featuredInfo}>
            <p className={classes.featuredName}>Cantilever chair</p>
            <ul className={classes.featuredColor}>
              <li className={classes.colorGreen}></li>
              <li className={classes.colorPink}></li>
              <li className={classes.colorBlue}></li>
            </ul>
            <span className={classes.featuredCode}>Code - Y523201</span>
            <span className={classes.featuredPrice}>$42.00</span>
          </div>
        </div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className={classes.featuredProduct}>
          <ul className={classes.featuredAction}>
            <li><i className="fas fa-shopping-cart"></i></li>
            <li><i className="far fa-heart"></i></li>
            <li><i className="fas fa-search-plus"></i></li>
          </ul>
          <span className={classes.featuredBtn}>View Details</span>
          <div className={classes.featuredImg}>
            <img srcSet={`${imgtest} 2x`} alt="image1168" />
          </div>
          <div className={classes.featuredInfo}>
            <p className={classes.featuredName}>Cantilever chair</p>
            <ul className={classes.featuredColor}>
              <li className={classes.colorGreen}></li>
              <li className={classes.colorPink}></li>
              <li className={classes.colorBlue}></li>
            </ul>
            <span className={classes.featuredCode}>Code - Y523201</span>
            <span className={classes.featuredPrice}>$42.00</span>
          </div>
        </div>
      </div>
    </div>


  </>;
};

export default FeaturedProducts;
