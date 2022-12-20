import React from 'react'
import ProfilePic from "../assets/img/profile-pic-1.png";
import HomeBgAnimation from '../components/HomeBgAnimation';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Home = () => {

    const divStyle = {
        backgroundImage: `url(${ProfilePic})`
    };

    const SocialMedia = [
        {name: 'LinkedIn', icon : <FaLinkedinIn />, src: 'https://www.linkedin.com/in/vimalroy08/'},
        {name: 'Envelope', icon : <FaEnvelope />, src: 'mailto:vimalroy999@gmail.com'},
        {name: 'Instagram', icon : <FaInstagram />, src: 'https://www.instagram.com/vimal.roy/'},
        {name: 'Facebook', icon : <FaFacebookF />, src: 'https://www.facebook.com/vimal.roy2'}
    ];

    return (

        <div id="content" className="page-content home site-content single-post" role="main">
            {/* Home Page Top Part */}
            <div className="row">
                <div className=" col-xs-12 col-sm-12">
                    <div className="home-content">
                        <div className="row flex-v-align">
                            <HomeBgAnimation />
                            <div className="col-sm-12 col-md-5 col-lg-5">
                                <div className="home-photo">
                                    <div className="hp-inner" style={divStyle} >
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-7 col-lg-7">
                                <div className="home-text hp-left">
                                    <p>Hi there! <span className="hand-wave">👋</span></p>
                                    <h1>I'm Vimal Roy</h1>
                                    <span className="txt-rotate" data-period="1000" data-rotate='[ "Frontend Developer", "WordPress Developer", "Web Developer" ]'></span>
                                    <p>A  Web Developer with professional experience in Frontend technologies.</p>

                                    <ul className="social-links">

                                        {SocialMedia.map(social => {
                                            return (
                                            <li key={social.name}>
                                                <a href={social.src} target="_blank" rel="noreferrer">
                                                    <div className='front-icon'>
                                                        {social.icon}
                                                    </div>
                                                    <div className='back-icon'>
                                                        {social.icon}
                                                    </div>
                                                </a>
                                            </li>
                                            );
                                        })}
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Home Page Top Part */}


        </div>

    )
}

export default Home;
