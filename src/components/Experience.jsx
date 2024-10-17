import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <div
      name="experience"
      className="relative lg:max-w-[1440px] lg:h-[450px] md:max-w-[704px] md:h-[461px] max-w-[375px] h-[614px] mx-auto flex justify-center items-start"
    >
      <div className="lg:w-[1100px] lg:h-[330px] border-t-2 border-b-2 border-[#242424] flex flex-col justify-end">
        <div className="lg:w-[1100px] lg:h-[255px] md:w-[704px] md:h-[451px] w-[345px] h-[604px] grid lg:grid-rows-2 lg:grid-cols-3 md:grid-rows-3 md:grid-cols-2 grid-cols-1 grid-rows-6 md:text-left text-center my-10">
          <div
            data-aos="fade-down"
            className="w-[345px] md:h-[98px] h-[67px] flex flex-col justify-between px-2"
          >
            <h1 className="md:text-[48px] text-[32px] font-bold ">HTML</h1>
            <p className="text-[#4EE1A0]">1 Years Experience</p>
          </div>
          <div
            data-aos="fade-down"
            className="w-[345px] md:h-[98px] h-[67px] flex flex-col justify-between px-2"
          >
            <h1
              className="md:text-[48px] text-[32px] font-bold 
"
            >
              CSS
            </h1>
            <p className="text-[#4EE1A0]">1 Years Experience</p>
          </div>
          <div
            data-aos="fade-down"
            className="w-[345px] md:h-[98px] h-[67px] flex flex-col justify-between px-2"
          >
            <h1 className="md:text-[48px] text-[32px] font-bold ">Sass</h1>
            <p className="text-[#4EE1A0]">2 Months Experience</p>
          </div>
          <div
            data-aos="fade-up"
            className="w-[345px] md:h-[98px] h-[67px] flex flex-col justify-between px-2"
          >
            <h1
              className="md:text-[48px] text-[32px] font-bold 
] "
            >
              Javascript
            </h1>
            <p className="text-[#4EE1A0]">1 Years Experience</p>
          </div>
          <div
            data-aos="fade-up"
            className="w-[345px] md:h-[98px] h-[67px] flex flex-col justify-between px-2"
          >
            <h1 className="md:text-[48px] text-[32px] font-bold ">React</h1>
            <p className="text-[#4EE1A0]">1 Years Experience</p>
          </div>
          <div
            data-aos="fade-up"
            className="w-[345px] md:h-[98px] h-[67px] flex flex-col justify-between px-2"
          >
            <h1 className="md:text-[48px] text-[32px] font-bold ">Tailwind</h1>
            <p className="text-[#4EE1A0]">1 Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};
