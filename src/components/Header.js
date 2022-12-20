import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const menuItems = [
    {name:'Home', link:'/'},
    {name:'About Me', link:'/about'},
    {name:'Resume', link:'/resume'},
    {name:'Portfolio', link:'/portfolio'},
    {name:'Contact', link:'/contact'}
];
 


const Header = () => {

    useEffect(() => {
        
    });


    const elements = document.getElementsByClassName("menu-item");

    for (const element of elements) {
        element.addEventListener("click", function() {
            alert(123);
        });
    }


    return (
        <header id="site_header" className="header">
            <div className="header-content clearfix">

                {/* Text Logo */}
                <div className="text-logo">
                    <NavLink  to="/">
                        <div className="logo-symbol">V</div>
                        <div className="logo-text">Vimal <span>Roy</span></div>
                    </NavLink>
                </div>
                {/* /Text Logo */}

                {/* Navigation */}
                <div className="site-nav mobile-menu-hide">
                    <ul className="leven-classic-menu site-main-menu">

                        {menuItems.map( menu => {
                            return (
                                <li className="menu-item" key={menu.name}>
                                    <NavLink to={menu.link}>{menu.name}</NavLink>
                                </li>
                            );
                        })}

                    </ul>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="menu-toggle mobile-visible">
                    <MobileMenu id="mobileMenu" left pageWrapId={"page-wrap"} outerContainerId={"App"} bodyClassName={ "menu-opened" }/>
                </div>
                {/* Mobile Menu Toggle */}
            </div>
        </header>
    )
}

export default Header