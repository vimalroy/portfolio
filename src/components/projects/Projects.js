import ProjectBlock from './ProjectBlock';
import AbsoluteThumb from '../../assets/img/portfolio/absolute-thumbnail.png';
import Absolute from '../../assets/img/portfolio/full/absolute.png';
import AetrioThumb from '../../assets/img/portfolio/aetrio-thumbnail.png';
import Aetrio from '../../assets/img/portfolio/full/aetrio.png';
import AptaThumb from '../../assets/img/portfolio/apta-thumbnail.png';
import Apta from '../../assets/img/portfolio/full/apta.png';
import EllixThumb from '../../assets/img/portfolio/ellix-thumbnail.png';
import Ellix from '../../assets/img/portfolio/full/ellix.png';
import MbruThumb from '../../assets/img/portfolio/mbru-thumbnail.png';
import Mbru from '../../assets/img/portfolio/full/mbru.png';
import MetarailThumb from '../../assets/img/portfolio/metarail-thumbnail.png';
import Metarail from '../../assets/img/portfolio/full/metarail.png';
import RafzThumb from '../../assets/img/portfolio/rafz-thumbnail.png';
import Rafz from '../../assets/img/portfolio/full/rafz.png';
import RoadwarezThumb from '../../assets/img/portfolio/roadwarez-thumbnail.png';
import Roadwarez from '../../assets/img/portfolio/full/roadwarez.png';
import TaibaThumb from '../../assets/img/portfolio/taiba-thumbnail.png';
import Taiba from '../../assets/img/portfolio/full/taiba.png';


const ProjectsBlockFull = () => {

    const ProjectsDone = [
        {
            name: "Absolute Vodka",
            image: Absolute,
            imagethumb: AbsoluteThumb,
            link: "https://absolutclub.co.uk/"
        },
        {
            name: "Aetrio Energy",
            image: Aetrio,
            imagethumb: AetrioThumb,
            link: "https://www.aetrioenergy.com/"
        },
        {
            name: "Apta Advice",
            image: Apta,
            imagethumb: AptaThumb,
            link: "https://www.apta-advice.com/"
        },
        {
            name: "Ellix HR",
            image: Ellix,
            imagethumb: EllixThumb,
            link: "https://ellixhr.com/"
        },
        {
            name: "MBRU",
            image: Mbru,
            imagethumb: MbruThumb,
            link: "http://www.mbru.ac.ae/"
        },
        {
            name: "Metarail",
            image: Metarail,
            imagethumb: MetarailThumb,
            link: "https://metaraillp.sweans.org/"
        },
        {
            name: "Rafz",
            image: Rafz,
            imagethumb: RafzThumb,
            link: "http://rafz.se/"
        },
        {
            name: "Roadwarez Delivery",
            image: Roadwarez,
            imagethumb: RoadwarezThumb,
            link: "https://roadwarezdelivery.com/"
        },
        {
            name: "Taiba",
            image: Taiba,
            imagethumb: TaibaThumb,
            link: "https://www.taibahospital.com/"
        }
    ];

    return (
        <div className="row">
            <div className=" col-xs-12 col-sm-12 ">

                <div id="portfolio_content_q" className="portfolio-content">

                    <div className="portfolio-grid two-columns shuffle">

                        {
                            ProjectsDone.map((value, index) => {
                                return <ProjectBlock key={index} num={index} name={value.name} image={value.image} imageThumb={value.imagethumb} link={value.link} />
                            })
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectsBlockFull;



