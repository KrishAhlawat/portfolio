import SkillName from "./SkillName";
import SkillTitle from "./SkillTitle";

export default function SkillsBox4() {
  return (
    <>
      <div className="border-2 px-10 py-5 rounded-xl m-5 md:mx-28 my-10 h-auto shadow-md hover:shadow-white ease-in-out delay-75">
        <SkillTitle SkillTitle={"LANGUAGES"}/>
        <div className="text-white text-lg">
          <SkillName SkillName={"PYTHON"} Level={"Intermediate"}/>
          <SkillName SkillName={"C"} Level={"Intermediate"}/>
          <SkillName SkillName={"JAVASCRIPT"} Level={"Intermediate"}/>
        </div>
      </div>
    </>
  );
}
