import clsx from "clsx";
import itemImg1 from "./../../image/slider/slider-image1.png";
import itemImg2 from "./../../image/slider/slider-image2.png";
import classes from "./SliderHome.module.scss";

const SliderHome = () => {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  // window.addEventListener("load", () => {
    document.addEventListener('DOMContentLoaded', function () {
    // const slider = $(`.${classes.slide}`);
    const dotItems = $$(`.${classes.dotItem}`);
    // const slideMain = $(`.${classes.mainSlide}`);
    const slideItems = $$(`.${classes.slideProduct}`);
    // const slideItemWidth = slideItems[0].offsetWidth;


    const handleChangeSlide = (index) => {
      // Cách 1: thay slide bằng display: none - block
      for(var i = 0; i < slideItems.length; i++){
        if(i!==index){
          slideItems[i].style.display = "none";
        }
        else {
          slideItems[i].style.display = "block";
        }
      }

        // Cách 2: thay slide bằng transform = "none" - `translate(-${transWidth}px)`
      // let transWidth = slideItemWidth * index;
      // if (index === 0) {
      //   slideMain.style.transform = "none";
      // } else {
      //   slideMain.style.transform = `translate(-${transWidth}px)`;
      // }
    };
    
    var slideIndex = 0;
    
    autoSlide()
    function autoSlide() {
      var i;
        // Cách 1: thay slide bằng display: none - block
      for (i = 0; i < slideItems.length; i++) {
        slideItems[i].style.display = "none";        
      }

      slideIndex++;
      if (slideIndex > slideItems.length) {
        slideIndex = 1;
      }

      for (i = 0; i < dotItems.length; i++) {
        dotItems[i].className = dotItems[i].className.replace(classes.active, "");
      }
        // Cách 1: thay slide bằng display: none - block
      slideItems[slideIndex - 1].style.display = "block";

        // Cách 2: thay slide bằng transform = "none" - `translate(-${transWidth}px)`
      // let transWidth = slideItemWidth * (slideIndex - 1);
      // if (slideIndex === 1) {
      //   slideMain.style.transform = "none";
      // } else {
      //   slideMain.style.transform = `translate(-${transWidth}px)`;
      // }

      dotItems[slideIndex - 1].classList.add(`${classes.active}`);
      setTimeout(autoSlide, 3000);
    }

    dotItems.forEach((item, index) => {
      item.onclick = () => {
        $(`.${classes.dotItem}.${classes.active}`).classList.remove(
          `${classes.active}`
        );
        item.classList.add(`${classes.active}`);
        // slideItems[index]

        handleChangeSlide(index);
      };
    });
  });

  return (
    <div className={classes.slide}>
      <ul className={classes.dotSlide}>
        <li className={clsx(classes.dotItem, classes.active)}></li>
        <li className={classes.dotItem}></li>
        <li className={classes.dotItem}></li>
      </ul>

      <div className={classes.wrapSlide}>
        <div className={classes.mainSlide}>
          <div className={clsx(classes.slideProduct)}>
            <img
              className={classes.itemImg1}
              srcSet={`${itemImg1} 2x`}
              alt="product"
            />
            <img
              className={classes.itemImg2}
              srcSet={`${itemImg2} 2x`}
              alt="product"
            />
            <div className={classes.slideContent}>
              <span>Best Furniture For Your Castle....</span>
              <h1>New Furniture Collection Trends in 2020</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
            </div>
          </div>
          <div className={clsx(classes.slideProduct)}>
            <div className={classes.background1}></div>
          </div>
          <div className={clsx(classes.slideProduct)}>
            <div className={classes.background2}></div>
          </div>
        </div>
      </div>

      <button className={clsx(classes.btnSlider, "btn primary")}>
        Shop Now
      </button>
    </div>
  );
};

export default SliderHome;
