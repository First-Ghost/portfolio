import myImage from "../images/porto 2.jpg";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <div
      className="relative  lg:max-w-[1440px] lg:h-[800px] mx-auto flex 
    justify-center items-center   "
    >
      <div className="lg:w-[1340px] lg:h-[700px] flex   ">
        <div className="lg:w-[680px] lg:h-[650px]  mx-auto px-4 flex flex-col  items-start  justify-center   ">
          <h1 className=" font-bold leading-[88px] tracking-[-2.5px] lg:w-[300] lg:h-[200px]   my-8">
            <TypeAnimation
              sequence={[" I’m Kasim! ", 3000, "Nice to meet you! ", 3000]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "88px", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="my-5 ml-2 font-bold ">
            Front-End Developer (Hobbyist) | Based in Turku, Finland
          </p>
          <p className="ml-2">
            I am a self-taught front-end developer with a passion for building
            engaging, user-friendly interfaces. Over time, I have developed
            skills in JavaScript, CSS, SASS, React, and Tailwind CSS. While I
            haven&apos;t worked professionally in the field yet, I&apos;ve been
            honing my skills through personal projects and continuously learning
            the latest technologies to stay updated with modern web development
            trends.
          </p>
          <div className="mt-10 text-[15px] leading-[16px] tracking-[2.20px] my-5 ml-2 font-bold w-[125px] h-[25px] border-b-2  border-b-[#4EE1A0] hover hover:tracking-[3px] ">
            <button className="hover:text-[#4EE1A0]  duration-200 ">
              CONTACT ME
            </button>
          </div>
        </div>
        <div>
          <img
            className="lg:w-[430px] lg:h-[650px] object-cover px-4  "
            src={myImage}
            alt="me"
          />
        </div>
      </div>
    </div>
  );
};
