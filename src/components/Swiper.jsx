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
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Navigation, Pagination,Autoplay]}
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
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">
                We are onair to build your dreams
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Architectural Planning, Interior designing, Space crafting
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src="/Home/img2.jpg"
            alt="Living Room Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">
                Designing Spaces with Elegance
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Interior Planning, Space Optimization, Modern Design
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src="/Home/img3.jpg"
            alt="Living Room Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">
                Designing Spaces with Elegance
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Interior Planning, Space Optimization, Modern Design
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src="/Home/img4.jpg"
            alt="Living Room Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">
                Designing Spaces with Elegance
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Interior Planning, Space Optimization, Modern Design
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src="/Home/img5.jpg"
            alt="Living Room Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">
                Designing Spaces with Elegance
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Interior Planning, Space Optimization, Modern Design
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src="/Home/img6.jpg"
            alt="Living Room Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">
                Designing Spaces with Elegance
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Interior Planning, Space Optimization, Modern Design
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
