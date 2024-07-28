export default function SkillsImg({SkillImg, SkillName}) {
    return (
        <>
            <div className="w-24 mx-5">
                <img src={SkillImg} alt="react logo" />
                <div className="text-center">{SkillName}</div>
            </div>
        </>
    );
}