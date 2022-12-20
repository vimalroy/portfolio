import { useEffect, useState } from "react";
const ExpBlock = (props) => {
    const [expData, setexpData] = useState(null);
    useEffect(() => {
        setexpData(props);
    }, [props])
    return (
        expData &&
        <div className="timeline-item clearfix">
            <h5 className="item-period ">{expData.year}</h5>
            {/* <span className="item-company">University of Studies</span> */}
            <h4 className="item-title">{expData.company}</h4>
            <p>{expData.position}</p>
        </div>

    );
}
export default ExpBlock;