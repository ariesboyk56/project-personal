import classes from "./HeadingBar.module.scss";
import clsx from "clsx";
const HeadingBar = () => {
  return (
      <div className={classes.content}>
        <div className={clsx(classes.contentWide, 'wide')}>
        <div className={classes.contact}>
          <div className={classes.item}>
            <a href="mailto:default@gmail.com">
              <i className="far fa-envelope mr-10"></i>
              <span>default@gmail.com</span>
            </a>
          </div>

          <div className={classes.item}>
            <a href="tel:0123456789">
              <i className="fas fa-phone-volume mr-10"></i>
              <span>0123-456-789</span>
            </a>
          </div>
        </div>

        <div className={classes.action}>
          <div className={classes.item}>
            <span>English</span>
            <i className=" ml-4 fas fa-angle-down"></i>
          </div>

          <div className={classes.item}>
            <span>USD</span>
            <i className=" ml-4 fas fa-angle-down"></i>
          </div>

          <div className={classes.item}>
            <span>Login</span>
            <i className=" ml-4 far fa-user"></i>
          </div>

          <div className={classes.item}>
            <span>Wishlist</span>
            <i className=" ml-4 far fa-heart"></i>
          </div>

          <div className={classes.item}>
            <i className="fas fa-shopping-cart ml-4"></i>
          </div>
        </div>
        </div>
      </div>
  );
};

export default HeadingBar;
