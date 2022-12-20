import EduBlock from "./EduBlock";
const Education = () => {
    const EduInfo = [
        {
            year: "Aug. 2013 – Apr. 2017",
            course: "Bachelor of Technology in Computer Science and Engineering",
            study_program: "University of Calicut"
        },
        {
            year: "June. 2011 – Mar. 2013",
            course: "12th Standard (Higher Secondary School)",
            study_program: "Kerala State Education Board"
        },
        {
            year: "June. 2000 – Mar. 2011",
            course: "10th Standard (High School)",
            study_program: "Kerala State Education Board"
        }
    ];
    return (
        <div id="timeline_1" className="timeline clearfix">
            {
                EduInfo.map((val, index) => {
                    return <EduBlock key={index} year={val.year} course={val.course} study_program={val.study_program} />
                })
            }
        </div>
    );
}
export default Education;