import SkillsImg from "./SkillsImg";
import SkillTitle from "./SkillTitle";

export default function SkillsBoxNew1() {
  return (
    <>
      <div className="border-2 px-3 lg:px-10 py-5 rounded-xl mx-10 md:mx-28 my-10 h-auto shadow-md hover:shadow-white ease-in-out delay-75">
        <SkillTitle SkillTitle={"FRONTEND"} />
        <div className="text-white text-lg flex justify-center h-40 items-center">
          {/* <SkillsImg
            SkillImg={"srcassets\react-logo-black-and-white.png"}
            SkillName={"REACT JS"}
          />
          <SkillsImg SkillName={"REACT JS"} /> */}
          <div className="w-auto mx-5">
            <div className="w-16 lg:w-24 h-16 lg:h-24">
              <img
                src="/react.svg"
                alt="react logo"
                className="w-24"
              />
            </div>
            <div className="text-center text-sm lg:text-lg mt-3">REACT JS</div>
          </div>
          <div className="w-auto mx-5">
            <div className="w-16 lg:w-24 h-16 lg:h-24">
              <img
                src="/tailwind-css-logo-black-bg.png"
                alt="tailwind logo"
                className="w-24"
              />
            </div>
            <div className="text-center text-sm lg:text-lg mt-3">TAILWIND CSS</div>
          </div>
          
        </div>
      </div>
    </>
  );
}
