import React from 'react'
import ProfilePic from "../assets/img/web-dev.gif";
import SkillLogoSlider from '../components/SkillLogoSlider';
import { FaFileDownload } from "react-icons/fa";
import { saveAs } from 'file-saver';
import Resume from "../assets/files/vimal-roy-resume.pdf";

function About() {

    const saveFile = () => {
        saveAs(
            Resume,
            "vimalroy.pdf"
        );
    };

    return (
        <div id="content" className="page-content site-content single-post" role="main">
            {/* Home Page Top Part */}
            <div className="row">
                <div className=" col-xs-12 col-sm-12">
                    <div className="home-content">
                        <div className="row flex-v-align">

                            <div className="col-sm-12 col-md-5 col-lg-5">
                                <div>
                                    <img src={ProfilePic} alt="How to Make a WordPress Plugin Extensible" title="" />
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-7 col-lg-7">
                                <div className="home-text hp-left">
                                    <h1>About Me</h1>
                                    <p>web developer with 4+ years of expertise as a front-end and WordPress developer, as well as the ability to deliver projects independently. I am extremely observant and meticulous. Both the technological and functional domains are well understood. I am highly organized and have the ability to maintain accurate records and effectively manage time. I desire to become a successful person and am enthusiastically interested in utilizing my analytical, technical, and professional skills for worthwhile purposes in line with the development of the organization.</p>
                                    <div className="download-btn-container">
                                        <button className="resume-download-btn" id="resume-download-btn" onClick={saveFile}>
                                            <span className="resume-download-btn-name">Download my CV </span><i><FaFileDownload /></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='skill-slider-section'>
                            <div className='skill-slider'>
                                <SkillLogoSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Home Page Top Part */}


        </div>
    )
}

export default About