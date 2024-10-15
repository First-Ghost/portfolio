import myImage from "../images/porto 2.jpg";
import rings from "../images/pattern-rings.svg";

import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <div
      className="relative lg:max-w-[1440px] lg:h-[800px] mx-auto flex 
    justify-center items-center    "
    >
      <div className="lg:w-[1340px] lg:h-[700px] md:w-[768px] md:h-[624px] md:mt-10 flex  ">
        <div className="lg:w-[680px] lg:h-[650px] md:w-[668px] md:h-[466px]   mx-auto px-4 flex flex-col  items-start lg:justify-center  md:justify-between   ">
          <h1
            className=" lg:w-[300] lg:h-[200px] lg:text-[88px] font-bold lg:leading-[88px] lg:tracking-[-2.5px]  lg:my-8 
          md:text-[62px] md:leading-[72px] md:tracking-[-2.05px]
          "
          >
            <TypeAnimation
              sequence={[" I’m Kasim! ", 3000, "Nice to meet you! ", 3000]}
              wrapper="div"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex flex-col items-start ">
            <p className="my-5 ml-2 font-bold ">
              Front-End Developer (Hobbyist) | Based in Turku, Finland
            </p>
            <p className="ml-2">
              I&apos;m a self-taught front-end developer with skills in
              JavaScript, CSS, SASS, and a focus on React and Tailwind CSS. I
              build user-friendly interfaces through personal projects and stay
              updated with the latest technologies. Fluent in both English and
              Finnish.
            </p>
            <div className="mt-10 text-[15px] leading-[16px] tracking-[2.20px] my-5 ml-2 font-bold w-[125px] h-[25px] border-b-2  border-b-[#4EE1A0] hover hover:tracking-[3px] ">
              <button className="hover:text-[#4EE1A0]  duration-200 ">
                CONTACT ME
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            className="lg:w-[430px] lg:h-[650px] object-cover px-4 "
            src={myImage}
            alt="me"
          />
        </div>
      </div>
      <div>
        <img
          className="absolute lg:left-[-15%] lg:top-[35%] md:left-[-35%] md:top-[15%]  md:block hidden "
          src={rings}
          alt="rings"
        />
      </div>
    </div>
  );
};
