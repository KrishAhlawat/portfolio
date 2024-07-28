import SkillName from "./SkillName";
import SkillTitle from "./SkillTitle";

export default function SkillsBox1() {
  return (
    <>
      <div className="border-2 px-3 lg:px-10 py-5 rounded-xl mx-10 md:mx-28 my-10 h-auto shadow-md hover:shadow-white ease-in-out delay-75">
        <SkillTitle SkillTitle={"FRONTEND"}/>
        <div className="text-white text-lg">
          <SkillName SkillName={"HTML"} Level={"Intermediate"}/>
          <SkillName SkillName={"CSS"} Level={"Intermediate"}/>
          <SkillName SkillName={"JAVASCRIPT"} Level={"Intermediate"}/>
        </div>
      </div>
    </>
  );
}
