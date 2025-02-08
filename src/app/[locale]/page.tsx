import BrandPromotion from "./components/BrandPromotion";
import Contact from "./components/Contact";
import HomeAbout from "./components/HomeAbout";
import Map from "./components/Map";
import Partners from "./components/Partners";
import Showcase from "./components/Showcase";

export default function Home() {
  return (
    <div className="myContainer">
      <Showcase />
      <HomeAbout />
      <BrandPromotion />
      <Map />
      <Partners />
      <Contact />
    </div>
  );
}
