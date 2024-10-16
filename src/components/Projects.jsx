import multipage from "../images/multipage_f.png";
import remaflix from "../images/remaflix_f.png";
import todo from "../images/todo_f.png";
import bmi from "../images/bmi_f.png";
import data from "../images/data_f.png";
import fastfood from "../images/fastfood_f.png";

export const Projects = () => {
  return (
    <div className="lg:max-w-[1440px] lg:h-[1770px] mx-auto">
      <div className="lg:w-[1110px] lg:h-[1270px] mx-auto felx flex-col justify-between ">
        <div className="lg:h-[170px] flex justify-between items-start ">
          <h1
            className="lg:w-[400px] lg:h-[200px] lg:text-[80px] font-bold lg:leading-[80px] lg:tracking-[-2.5px]   
          md:text-[62px] md:leading-[72px] md:tracking-[-2.05px]
          text-[40px]"
          >
            Projects
          </h1>
          <div className="mt-10 text-[15px] leading-[16px] tracking-[2.20px]   font-bold w-[125px] h-[25px] border-b-2  border-b-[#4EE1A0] hover hover:tracking-[3px] flex justify-center">
            <button className="hover:text-[#4EE1A0]  duration-200  ">
              CONTACT ME
            </button>
          </div>
        </div>

        <div className="lg:w-[1110px] lg:h-[1600px] lg:grid-cols-2 lg:grid-rows-2   grid ">
          <div className="lg:w-[540px] lg:h-[480px] flex flex-col items-start justify-center bg-black ">
            <img
              className="lg:w-auto  lg:h-[400px] object-cover "
              src={multipage}
              alt="multipage"
            />
            <div>
              <h1 className="lg:text-[24px] uppercase ">
                multi-page website (Routing & animation)
              </h1>

              <p>REACT & TAILWIND</p>
            </div>
          </div>
          <div className="lg:w-[530px] lg:h-[480px] flex flex-col items-start bg-black ">
            <img
              className="lg:w-auto lg:h-[400px] object-cover"
              src={remaflix}
              alt="remaflix"
            />
            <div>
              <h1 className="lg:text-[24px] uppercase  ">
                ENTERTAINMENT WEB APP (API & Routing )
              </h1>

              <p>REACT & TAILWIND</p>
            </div>
          </div>
          <div className="lg:w-[540px] lg:h-[480px]  flex flex-col items-start bg-black  ">
            <img
              className="lg:w-auto lg:h-[380px] object-cover"
              src={todo}
              alt="todo"
            />
            <div>
              <h1 className="lg:text-[24px] uppercase  ">
                TODO WEB APP (simple CRUD)
              </h1>

              <p>REACT & TAILWIND</p>
            </div>
          </div>
          <div className="lg:w-[540px] lg:h-[480px] flex flex-col items-start bg-black">
            <img
              className="lg:w-auto lg:h-[400px] object-cover"
              src={bmi}
              alt="bmi"
            />
            <div>
              <h1 className="lg:text-[24px] uppercase  ">BMI Calculator</h1>

              <p>REACT & TAILWIND</p>
            </div>
          </div>
          <div className="lg:w-[540px] lg:h-[480px] flex flex-col items-start bg-black">
            <img
              className="lg:w-auto lg:h-[400px] object-cover"
              src={data}
              alt="data"
            />
            <div>
              <h1 className="lg:text-[24px] uppercase  ">
                Cloud-Data (Smooth scrolling)
              </h1>

              <p>REACT & TAILWIND</p>
            </div>
          </div>
          <div className="lg:w-[540px] lg:h-[480px] flex flex-col items-start bg-black">
            <img
              className="lg:w-auto lg:h-[400px] object-cover"
              src={fastfood}
              alt="fastfood"
            />
            <div>
              <h1 className="lg:text-[24px] uppercase  ">
                Fast Food Menu (data.json)
              </h1>

              <p>REACT & TAILWIND</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
