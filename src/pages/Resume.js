import React from 'react'
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import SkillBlockFull from '../components/Skills/Skills';

function Resume() {
    return (
        <div>
            <div className="page-title">
                <h1>Resume</h1>
                <div className="page-subtitle">
                    <h4> 4+ Years of Experience</h4>
                </div>
            </div>

            <div id="content" className="page-content site-content single-post" role="main">
                <div className="row">

                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title">
                            <h2>Education</h2>
                        </div>

                        <Education/>
                    </div>

                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title">
                            <h2>Experience</h2>
                        </div>

                        <Experience/>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="p-40"></div>
                    </div>
                </div>

                <SkillBlockFull />
            </div>
        </div>
    )
}

export default Resume