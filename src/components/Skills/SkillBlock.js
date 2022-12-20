import { useEffect, useState} from "react";
const Skillblock = (props) => {
    const [skillSet,setskillSet] = useState(null);
	useEffect(()=>{
		setskillSet(props);
	},[props]);

    return (
        skillSet &&
        <div>
            <div className="clearfix">
                <h4>{skillSet.skill}</h4>
                <div className="skill-value">{skillSet.percentage + '%'}</div>
            </div>
            <div id={'skill_' + skillSet.num} data-value={skillSet.percentage} className="skill-container">
                <div className="skill-percentage" style={{width: skillSet.percentage + '%'}}></div>
            </div>
        </div>
    )
}

export default Skillblock;