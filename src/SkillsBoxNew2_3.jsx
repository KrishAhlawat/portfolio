import SkillsImg from "./SkillsImg";
import SkillTitle from "./SkillTitle";

export default function SkillsBoxNew2_3() {
  return (
    <>
      <div className="w-20 lg:w-full px-3 lg:px-10 py-2 flex rounded-xl md:mx-28 my-5 h-auto">
        <div className="text-center flex items-center justify-center mx-2 lg:mx-10">
          <SkillTitle SkillTitle={"FRONTEND"} />
        </div>
        <div className="h-auto w-1 bg-blue-500 lg:mx-5 rounded-lg"></div>
        <div className="text-white text-lg flex justify-center h-40 items-center">
          <div className="w-auto lg:mx-10">
            <div className="w-12 lg:w-24 h-12 lg:h-24">
              <img
                src="\src\assets\react.svg"
                alt="react logo"
                className="w-24"
              />
            </div>
            <div className="text-center text-sm lg:text-xl mt-3">REACT JS</div>
          </div>
          <div className="w-auto lg:mx-10">
            <div className="w-24 h-24">
              <img
                src="\src\assets\tailwind-css-logo-black-bg.png"
                alt="tailwind logo"
                className="w-24"
              />
            </div>
            <div className="text-center mt-3">TAILWIND CSS</div>
          </div>
        </div>
      </div>
    </>
  );
}
