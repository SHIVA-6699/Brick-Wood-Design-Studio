import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// import "swiper-bundle.min.css";

const ImageSwiper = () => {
  const slides = [
    "/Carousel/Gallary 1.jpg", // replace with your image paths
    "/Carousel/Gallary 2.jpg",
    "/Carousel/Gallary 3.jpg",
    "/Carousel/Gallary 4.jpg",
    "/Carousel/Gallary 5.jpg",
    "/Carousel/Gallary 6.jpg",
    "/Carousel/Gallary 7.jpg",
    "/Carousel/Gallary 8.jpg",
    "/Carousel/Gallary 9.jpg",
    "/Carousel/Gallary 10.jpg",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h1 className="text-4xl text-secondary font-bold text-center mb-8">
        Step into our Gallery
      </h1>

      {/* Main Carousel */}
      <Swiper
        spaceBetween={30}
        // Responsive breakpoints for slidesPerView
        breakpoints={{
          640: {
            slidesPerView: 1, // Mobile view
          },
          768: {
            slidesPerView: 2, // Tablet view
          },
          1024: {
            slidesPerView: 3, // Desktop view
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide}
              alt={`slide-${index}`}
              className="w-full h-72 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Dots */}
      <div className="custom-pagination flex justify-center space-x-2 mt-4">
        <span className="h-3 w-3 rounded-full bg-gray-400 cursor-pointer hover:bg-gray-600"></span>
        <span className="h-3 w-3 rounded-full bg-gray-400 cursor-pointer hover:bg-gray-600"></span>
        <span className="h-3 w-3 rounded-full bg-gray-400 cursor-pointer hover:bg-gray-600"></span>
      </div>
    </div>
  );
};

export default ImageSwiper;
