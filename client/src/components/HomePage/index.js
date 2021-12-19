import clsx from "clsx";
import classes from "./HomePage.module.scss";
import FeaturedProducts from "./FeaturedProducts";
import LeatestProducts from "./LeatestProducts";
import Footer from "../Footer";
import SliderHome from "../SliderHome";
import ShopOffer from "./ShopOffer";
import UniqueProduct from "./UniqueProduct";
import TrendingProducts from "./TrendingProducts";
import DiscountProducts from "./DiscountProducts";
import TopCategories from "./TopCategories";
import BannerSubscribe from "./BannerSubscribe";
import LeatestBlog from "./LeatestBlog";


const HomePage = () => {
  return (
    <div className={clsx(classes.container)}>
      <SliderHome />
      <div className="wide">
      <FeaturedProducts />
      <LeatestProducts />
      <ShopOffer />
      </div>
      <UniqueProduct />
      <TrendingProducts />
      <DiscountProducts />
      <TopCategories />
      <BannerSubscribe />
      <LeatestBlog />
      <Footer />
    </div>
  );
};

export default HomePage;
