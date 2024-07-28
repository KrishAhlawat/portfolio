import SkillName from "./SkillName";
import SkillTitle from "./SkillTitle";

export default function SkillsBox2() {
  return (
    <>
      <div className="border-2 px-10 py-5 rounded-xl m-5 md:mx-28 my-10 h-auto shadow-md hover:shadow-white ease-in-out delay-75">
        <SkillTitle SkillTitle={"BACKEND"} />
        <div className="text-white text-lg">
          <SkillName SkillName={"NODE JS"} Level={"Intermediate"} />
          <SkillName SkillName={"EXPRESS JS"} Level={"Intermediate"} />
        </div>
      </div>
    </>
  );
}
