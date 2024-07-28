export default function SkillName({SkillName, Level}) {
    return (
        <>
            <div className="flex flex-nowrap my-3">
            <span class="material-symbols-rounded text-center items-center mt-1 text-sm lg:text-md">
              verified
            </span>
            <div className="mx-5">
              <div className="font-bold text-sm lg:text-base">{SkillName}</div>
              <div className="opacity-60 text-sm lg:text-base">{Level}</div>
            </div>
          </div>
        </>
    );
}