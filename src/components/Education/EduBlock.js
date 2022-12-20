import { useEffect, useState } from "react";
const EduBlock = (props) => {
    const [eduData, seteduData] = useState(null);
    useEffect(() => {
        seteduData(props);
    }, [props])
    return (
        eduData &&
        <div className="timeline-item clearfix">
            <h5 className="item-period ">{eduData.year}</h5>
            {/* <span className="item-company">University of Studies</span> */}
            <h4 className="item-title">{eduData.course}</h4>
            <p>{eduData.study_program}</p>
        </div>

    );
}
export default EduBlock;