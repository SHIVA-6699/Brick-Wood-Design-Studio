import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Navigation, Pagination, Autoplay]}
      className="h-[45rem] lg:h-[40rem]"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src="/Home/img1.jpg"
            alt="Kitchen Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center relative text-white">
              <img src="/Home/logo2.png" className="" />
              <p className="absolute sm:top-[15rem] sm:left-[7rem] text-center text-lg md:text-xl">
                Architecture Planning, Interior Designing, Space Crafting
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src="/Home/2.jpg"
            alt="Living Room Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute  inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <img src="/Home/logo2.png" className="" />
              <p className="mt-4 text-lg md:text-xl">
                Architecture Planning, Interior Designing, Space Crafting
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src="/Home/3.png"
            alt="Living Room Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <img src="/Home/logo2.png" className="" />
              <p className="mt-4 text-lg md:text-xl">
                Architecture Planning, Interior Designing, Space Crafting
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src="/Home/4.png"
            alt="Living Room Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <img src="/Home/logo2.png" className="" />
              <p className="mt-4 text-lg md:text-xl">
                Architecture Planning, Interior Designing, Space Crafting
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src="/Home/5.png"
            alt="Living Room Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <img src="/Home/logo2.png" className="" />
              <p className="mt-4 text-lg md:text-xl">
                Architecture Planning, Interior Designing, Space Crafting
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src="/Home/6.jpg"
            alt="Living Room Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <img src="/Home/logo2.png" className="" />
              <p className="mt-4 text-lg md:text-xl">
                Architecture Planning, Interior Designing, Space Crafting
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
