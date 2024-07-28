import SkillName from "./SkillName";
import SkillTitle from "./SkillTitle";

export default function SkillsBox3() {
  return (
    <>
      <div className="border-2 px-10 py-5 rounded-xl shadow-md mr-36 md:mx-28 my-10 h-auto hover:shadow-white ease-in-out delay-75">
        <SkillTitle SkillTitle={"FRAMEWORK"}/>
        <div className="text-white text-lg">
          <SkillName SkillName={"REACT JS"} Level={"Intermediate"}/>
          <SkillName SkillName={"BOOTSTRAP"} Level={"Intermediate"}/>
          <SkillName SkillName={"TAILWIND CSS"} Level={"Intermediate"}/>
        </div>
      </div>
    </>
  );
}
