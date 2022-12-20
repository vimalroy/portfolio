import { useEffect, useState } from "react";
import Fancybox from "../../assets/js/fancybox";
import { FaLink } from "react-icons/fa";
const Projectblock = (props) => {
    const [portfolioData, setportfolioDatat] = useState(null);
    useEffect(() => {
        setportfolioDatat(props);
    }, [props]);

    return (
        portfolioData &&
        <div>
            <figure className="item lbimage">
                <div className="portfolio-item-img">
                    <a data-fancybox="gallery" href={portfolioData.image}>
                        <img alt={'project_' + portfolioData.num} src={portfolioData.imageThumb} />
                    </a>
                </div>

                <a href="#"><i><FaLink /></i></a>
                <h4 className="name">{portfolioData.name}</h4>
                <span className="category">Website</span>
            </figure>
        </div>
    )
}

export default Projectblock;