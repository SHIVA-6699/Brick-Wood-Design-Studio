import ImageSwiper from "../components/Carousel";
import { ContactUs } from "../components/ContactUs";
import SwiperComponent from "../components/Swiper"
import { About } from "./About"

const Home = () => {
  return (
    <div className="bg-primary">
      <SwiperComponent />
      <About />
      <ImageSwiper/>
      <ContactUs/>
      
    </div>
  );
}

export default Home
