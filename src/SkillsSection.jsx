import SkillsBox1 from "./SkillsBox1";
import SkillsBox2 from "./SkillsBox2";
import SkillsBox3 from "./SkillsBox3";
import SkillsBox4 from "./SkillsBox4";
import Spline from "@splinetool/react-spline";
import SkillsBoxNew1 from "./SkillsBoxNew1";
import SkillsBoxNew2 from "./SkillsBoxNew2";
import SkillsBoxNew3 from "./SkillsBoxNew3";
import SkillsBoxNew2_1 from "./SkillsBoxNew2_1";
import SkillsBoxNew2_2 from "./SkillsBoxNew2_2";
import SkillsBoxNew2_3 from "./SkillsBoxNew2_3";

export default function SkillsSection() {
  return (
    <>
      <div className="lg:relative" id="Skills">
        <div className="text-white p-10 text-3xl underline md:text-6xl text-center w-full font-bold bg-transparent z-10">
          Tech Stack I pursue
        </div>
        <div className="w-full m-0 p-0 h-dvh">
          <div className="mx-5 flex flex-nowrap overflow-x-auto SkillsSection lg:flex-wrap top-10 md:top-28 z-10 items-center justify-center lg:absolute bg-transparent">
            <div className="lg:hidden mr-60">
              <SkillsBox3 />
            </div>
            <SkillsBoxNew1 />
            <SkillsBoxNew2 />
            <SkillsBoxNew3 />
          </div>
        </div>
      </div>
    </>
  );
}
