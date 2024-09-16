import { about } from "../constants/about";
export const About = () => {
  return (
    <div className="h-fit space-y-10  text-secondary my-[5rem]">
      <h1 className="text-center text-5xl font-semibold  font-rubik w-fit mx-auto pb-2">
        About US
      </h1>

      <div className="lg:mx-[20rem] mx-10 space-y-4 lg:space-y-[10rem]">
        {about.map((item, index) => (
          <LineComp
            key={index}
            isLeft={index % 2 === 0}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

const LineComp = ({ isLeft, title, description, image }) => {
  return (
    <div
      className={`flex items-center justify-between gap-10  lg:*:w-[50%] ${
        isLeft ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"
      }`}
    >
      <div className="space-y-5 font-poppins text-sm">
        <h3 className="text-4xl font-rubik text-empower font-semibold">
          {title}
        </h3>
        <p className="text-xl">{description}</p>
      </div>
      <div className={`flex  ${isLeft ? "justify-end" : "justify-start"}`}>
        <img className="max-h-[350px] w-full rounded-xl" src={image} alt="" />
      </div>
    </div>
  );
};
