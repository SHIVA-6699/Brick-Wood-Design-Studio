import  { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";

// Import any needed Swiper modules
import { Navigation, Pagination } from "swiper/modules";

// Sample image data

const Projects = () => {
  const data = [
    {
      title: "Pranu's griha ",
      img: [
        "Projects/slide6/1.jpg",
        "Projects/slide6/2.jpg",
        "Projects/slide6/3.jpg",
        "Projects/slide6/4.jpg",
        "Projects/slide6/5.jpg",
        "Projects/slide6/6.jpg",
        "Projects/slide6/7.jpg",
        "Projects/slide6/8.jpg",
      ],
    },
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
      title: "Vedavathi villa",
      img: [
        "Projects/slide7/1.png",
        "Projects/slide7/2.png",
        "Projects/slide7/3.png",
        "Projects/slide7/4.png",
        "Projects/slide7/5.png",
        "Projects/slide7/6.png",
        "Projects/slide7/7.png",
        "Projects/slide7/8.jpg",
        "Projects/slide7/9.jpg",
      ],
    },
    {
      title: "Sarans residency ",
      img: [
        "Projects/slide8/1.png",
        "Projects/slide8/2.png",
        "Projects/slide8/3.png",
        "Projects/slide8/4.png",
        "Projects/slide8/5.png",
        "Projects/slide8/6.png",
        "Projects/slide8/7.png",
        "Projects/slide8/8.png",
        "Projects/slide8/9.png",
      ],
    },
    {
      title: "House of blues",
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
      img: [
        "Projects/slide5/1.jpg",
        "Projects/slide5/2.jpg",
        "Projects/slide5/3.jpg",
        "Projects/slide5/4.jpg",
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
        "Projects/slide2/9.png",
        "Projects/slide2/10.png",
      ],
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
    <div className="bg-primary lg:mx-[15rem]">
        <h1 className="text-4xl text-secondary uppercase font-bold text-center mb-7">
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
                loading="lazy"
                className="w-full h-[30rem] object-contain object-center  rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-wrap justify-center gap-3 lg:gap-3 lg:space-x-4  mt-6">
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
