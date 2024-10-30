import { Link } from "react-scroll";

import multipage from "../images/multipage_f.png";
import remaflix from "../images/remaflix_f.png";
import todo from "../images/todo_f.png";
import bmi from "../images/bmi_f.png";
import data from "../images/data_f.png";
import fastfood from "../images/fastfood_f.png";

export const Projects = () => {
  return (
    <div
      name="projects"
      className="lg:max-w-[1440px] lg:h-[1870px] md:max-w-[760px] md:h-[1346px] max-w-[375px] h-[2100px]  mx-auto lg:mt-0  mt-[5rem]"
    >
      <div className="lg:w-[1110px] lg:h-[1270px] md:w-[708px] md:h-[1015px] mx-auto felx flex-col justify-between ">
        <div className="lg:h-[170px] flex justify-between items-center px-4">
          <h1
            className="lg:w-[400px] lg:h-[200px]  lg:text-[80px] font-bold lg:leading-[80px] lg:tracking-[-2.5px]   
          md:text-[62px] md:leading-[72px] md:tracking-[-2.05px]
          text-[40px] lg:mt-10"
          >
            Projects
          </h1>
          <div className="lg:mt-1 mt-10 text-[15px] leading-[16px] tracking-[2.20px]   font-bold w-[125px] h-[25px] border-b-2  border-b-[#4EE1A0]  hover:tracking-[3px] flex justify-center md:mb-12 mb-10 ">
            <button className="hover:text-[#4EE1A0]  duration-200 uppercase ">
              <Link to="contact" smooth={true} offset={-50} duration={500}>
                Contact me
              </Link>
            </button>
          </div>
        </div>
        {/*PROJECTS CARDS*/}
        <div className="lg:w-[1110px] lg:h-[1600px] md:w-[708px] md:h-[1015px] w-[340px] h-[2200px] md:grid-rows-2 md:grid-cols-2 grid-cols-1 grid-rows-7 grid lg:my-1 my-10 mx-auto">
          {/* Card 1 */}

          <div className="relative lg:w-[540px] lg:h-[480px] md:w-[340px] h-[300px] bg-black">
            <div className="absolute lg:w-[540px] lg:h-[405px] md:w-[340px] h-[255px] top-0 left-0 right-0 bottom-0 hover:bg-black hover:bg-opacity-75 ease-in duration-500 bg-gradient-to-r from-black/75 via-gray-800/40 to-black/90 ">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-400">
                <a
                  href="https://kasim-ke.github.io/023_photo-multp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="hover:text-[#4EE1A0] font-bold border-b-2 border-b-[#4EE1A0] hover:tracking-widest duration-300 text-[24px]">
                    VIEW PROJECT
                  </button>
                </a>
              </div>
            </div>
            <img src={multipage} alt="multipage" />
            <div>
              <h1 className="lg:text-[24px] uppercase">
                Multi-Page ( Routing)
              </h1>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative lg:w-[540px] lg:h-[480px] md:w-[340px] h-[300px] bg-black">
            <div className="absolute lg:w-[540px] lg:h-[405px] md:w-[340px] h-[255px] top-0 left-0 right-0 bottom-0 hover:bg-black hover:bg-opacity-75 ease-in duration-500 bg-gradient-to-r from-black/75 via-gray-800/40 to-black/90">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-400">
                <a
                  href="https://kasim-ke.github.io/remaflix/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="hover:text-[#4EE1A0] font-bold border-b-2 border-b-[#4EE1A0] hover:tracking-widest duration-300 text-[24px]">
                    VIEW PROJECT
                  </button>
                </a>
              </div>
            </div>
            <img
              className="lg:w-auto lg:h-[400px] object-cover"
              src={remaflix}
              alt="remaflix"
            />
            <div>
              <h1 className="lg:text-[24px] uppercase">
                ENTERTAINMENT WEB APP (API & Routing)
              </h1>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative lg:w-[540px] lg:h-[480px] md:w-[340px] h-[300px] bg-black">
            <div className="absolute lg:w-[540px] lg:h-[405px] md:w-[340px] h-[255px] top-0 left-0 right-0 bottom-0 hover:bg-black hover:bg-opacity-75 ease-in duration-500 bg-gradient-to-r from-black/75 via-gray-800/40 to-black/90">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-400">
                <a
                  href="https://kasim-ke.github.io/026_todo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="hover:text-[#4EE1A0] font-bold border-b-2 border-b-[#4EE1A0] hover:tracking-widest duration-300 text-[24px]">
                    VIEW PROJECT
                  </button>
                </a>
              </div>
            </div>
            <img
              className="lg:w-auto lg:h-[400px] object-cover"
              src={todo}
              alt="todo"
            />
            <div>
              <h1 className="lg:text-[24px] uppercase">
                TODO WEB APP (simple CRUD)
              </h1>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative lg:w-[540px] lg:h-[480px] md:w-[340px] h-[300px] bg-black">
            <div className="absolute lg:w-[540px] lg:h-[405px] md:w-[340px] h-[255px] top-0 left-0 right-0 bottom-0 hover:bg-black hover:bg-opacity-75 ease-in duration-500 bg-gradient-to-r from-black/75 via-gray-800/40 to-black/90">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-400">
                <a
                  href="https://kasim-ke.github.io/022_BMI-vite/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="hover:text-[#4EE1A0] font-bold border-b-2 border-b-[#4EE1A0] hover:tracking-widest duration-300 text-[24px]">
                    VIEW PROJECT
                  </button>
                </a>
              </div>
            </div>
            <img
              className="lg:w-auto lg:h-[400px] object-cover"
              src={bmi}
              alt="bmi"
            />
            <div>
              <h1 className="lg:text-[24px] uppercase">BMI Calculator</h1>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative lg:w-[540px] lg:h-[480px] md:w-[340px] h-[300px] bg-black">
            <div className="absolute lg:w-[540px] lg:h-[405px] md:w-[340px] h-[255px] top-0 left-0 right-0 bottom-0 hover:bg-black hover:bg-opacity-75 ease-in duration-500 bg-gradient-to-r from-black/75 via-gray-800/40 to-black/90">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-400">
                <a
                  href=" https://kasim-ke.github.io/017-cloud-data/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="hover:text-[#4EE1A0] font-bold border-b-2 border-b-[#4EE1A0] hover:tracking-widest duration-300 text-[24px]">
                    VIEW PROJECT
                  </button>
                </a>
              </div>
            </div>
            <img
              className="lg:w-auto lg:h-[400px] object-cover"
              src={data}
              alt="data"
            />
            <div>
              <h1 className="lg:text-[24px] uppercase">
                Cloud-Data (Smooth scrolling)
              </h1>
            </div>
          </div>

          {/* Card 6 */}
          <div className="relative lg:w-[540px] lg:h-[480px] md:w-[340px] h-[300px] bg-black">
            <div className="absolute lg:w-[540px] lg:h-[405px] md:w-[340px] h-[255px] top-0 left-0 right-0 bottom-0 hover:bg-black hover:bg-opacity-75 ease-in duration-500 bg-gradient-to-r from-black/75 via-gray-800/40 to-black/90">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-400">
                <a
                  href="https://kasim-ke.github.io/fast_food/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="hover:text-[#4EE1A0] font-bold border-b-2 border-b-[#4EE1A0] hover:tracking-widest duration-300 text-[24px]">
                    VIEW PROJECT
                  </button>
                </a>
              </div>
            </div>
            <img
              className="lg:w-auto lg:h-[400px] object-cover"
              src={fastfood}
              alt="fastfood"
            />
            <div>
              <h1 className="lg:text-[24px] uppercase">
                Fast Food Menu (data.json)
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
