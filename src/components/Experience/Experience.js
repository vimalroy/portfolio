import ExpBlock from "./ExpBlock";
const Experience = () =>{
    const ExpInfo = [
        {
            year: "Nov. 2020 - Present",
            company: "Sweans Technologies Pvt Ltd",
            position: "Web Developer"
        },
        {
            year: "Aug. 2019 - Oct. 2020",
            company: "Infinite Open Source Solutions LLP",
            position: "Web Developer"
        },
        {
            year: "June. 2000 – Mar. 2011",
            company: "Pixelflames Technologies Pvt Ltd",
            position: "Front-end and WordPress Developer"
        }
    ];
    return(
        <>
            <div id="timeline_2" className="timeline clearfix">
                {
                    ExpInfo.map((val,index)=>{
                        return <ExpBlock key={index} year={val.year} company={val.company} position={val.position} />
                    })
                }
                
            </div>
        </>
    );
}
export default Experience;