import BestSellings from "./components/BestSellings/BestSellings";
import ProductsList from "./components/featuredProducts/ProductsList";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Hero from "./components/hero/Hero";
import SellYourProducts from "./components/SellYourProducts/SellYourProducts";
import VIPListing from "./components/VIPLiisting/VIPListing";
// import WhyChooseUS from "./components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <div className="mt-[50px]">
        <Hero />
      </div>
      <div className="mt-[200px] px-11">
        <ProductsList />
      </div>
      <div className="mt-[54px]">
        <SellYourProducts />
      </div>
      <div className="mt-[54px] px-11 container">
        <VIPListing />
      </div>
      <div className="mt-[100px] px-11 container">
        <BestSellings />
      </div>
      <div className="mt-[100px]">
        <GetInTouch />
      </div>
    </div>
  );
}
