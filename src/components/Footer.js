import React from 'react'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="site-footer clearfix">
            <div className="footer-social">
                <p className="madewithlove">
                    Made with <FaHeart />
                </p>
                
            </div>

            <div className="footer-copyrights">
                <p>© {(new Date().getFullYear())} All rights reserved. Vimal Roy.</p>
            </div>
        </footer>
    )
}

export default Footer