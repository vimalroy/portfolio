import SkillBlock from './SkillBlock';
const SkillBlockFull = () => {

    const SoftSkillData = [
        {
            skill : "Leadership",
            percentage : "80",
        },
        {
            skill : "Responsibility",
            percentage : "95",
        },
        {
            skill : "Teamwork",
            percentage : "90",
        },
        {
            skill : "Problem Solving",
            percentage : "88",
        },
        {
            skill : "Communication",
            percentage : "75",
        }
    ];

    const HardSkillData = [
        {
            skill : "HTML5/CSS3/SASS",
            percentage : "90",
        },
        {
            skill : "WordPress/PHP",
            percentage : "85",
        },
        {
            skill : "Javascript/JQuery",
            percentage : "80",
        },
        {
            skill : "React JS",
            percentage : "60",
        },
        {
            skill : "MySQL",
            percentage : "50",
        }
    ];

    return (
        <div className="row">
            <div className=" col-xs-12 col-sm-6 ">
                <div className="block-title">
                    <h2>Soft Skills</h2>
                </div>

                <div id="skills_1" className="skills-info skills-first-style">
                    
                    {
                        SoftSkillData.map((val, index)=>{
                            return <SkillBlock key={index} num={index} skill={val.skill} percentage={val.percentage} />
                        })
                    }

                </div>

            </div>


            <div className=" col-xs-12 col-sm-6 ">
                <div className="block-title">
                    <h2>Coding Skills</h2>
                </div>


                <div id="skills_2" className="skills-info skills-first-style">

                    {
                        HardSkillData.map((val, index)=>{
                            return <SkillBlock key={index} num={index} skill={val.skill} percentage={val.percentage} />
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default SkillBlockFull;



