import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";

// Import any needed Swiper modules
import { Navigation, Pagination } from "swiper/modules";

// Sample image data

const Projects = () => {
  const data = [
    {
      title: "MY HOME BHOOJA",

      img: [
        "Projects/slide1//1.jpg",
        "Projects/slide1/2.jpg",
        "Projects/slide1/3.jpg",
        "Projects/slide1/4.jpg",
        "Projects/slide1/5.jpg",
        "Projects/slide1/6.jpg",
        "Projects/slide1/7.jpg",
        "Projects/slide1/8.jpg",
        "Projects/slide1/9.jpg",
      ],
    },
    {
      title: "OBESSED FRAMES",
      img: [
        "Projects/slide2/1.jpg",
        "Projects/slide2/2.jpg",
        "Projects/slide2/3.jpg",
        "Projects/slide2/4.jpg",
        "Projects/slide2/5.jpg",
        "Projects/slide2/6.jpg",
        "Projects/slide2/7.jpg",
        "Projects/slide2/8.jpg",
      ],
    },
    {
      title: "SHADY BLUES",
      img: [
        "Projects/slide3/1.jpg",
        "Projects/slide3/2.jpg",
        "Projects/slide3/3.jpg",
        "Projects/slide3/4.jpg",
        "Projects/slide3/5.jpg",
        "Projects/slide3/6.jpg",
        "Projects/slide3/7.jpg",
        "Projects/slide3/8.jpg",
        "Projects/slide3/9.jpg",
        "Projects/slide3/10.jpg",
      ],
    },
    {
      title: "SUKOON",
      img: [
        "Projects/slide4/1.jpg",
        "Projects/slide4/2.jpg",
        "Projects/slide4/3.jpg",
        "Projects/slide4/4.jpg",
        "Projects/slide4/5.jpg",
        "Projects/slide4/6.jpg",
        "Projects/slide4/7.jpg",
        "Projects/slide4/8.jpg",
        "Projects/slide4/9.jpg",
        "Projects/slide4/10.jpg",
        "Projects/slide4/11.jpg",
      ],
    },
    {
      title: "BLACK AND WHITE",
      img:[
        "Projects/slide5/1.jpg",
        "Projects/slide5/2.jpg",
        "Projects/slide5/3.jpg",
        "Projects/slide5/4.jpg",
            
      ]
    },
  ];
  // Create a ref for the Swiper instance

  return (
    <div className="bg-primary">
      {data.map((item, index) => (
        <CardSection key={index} imageData={item.img} title={item.title} />
      ))}
    </div>
  );
};

export default Projects;

const CardSection = ({ imageData ,title}) => {
  const swiperRef = useRef(null);

  const handleThumbnailClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };
  return (
    <div className="bg-primary">
        <h1 className="text-4xl text-secondary capitalize font-bold text-center mb-7">
            {title}
        </h1>
      <div className="bg-primary p-10 mySwiper  mx-10">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className=""
        >
          {imageData.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-wrap gap-3 lg:gap-0 lg:space-x-4 mt-6 justify-start">
          {imageData.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className="w-20  h-20 object-cover rounded-lg shadow-md cursor-pointer"
              onClick={() => handleThumbnailClick(index)} // Click to navigate to the respective slide
            />
          ))}
        </div>

        {/* Thumbnails for smaller images */}
      </div>
    </div>
  );
};
