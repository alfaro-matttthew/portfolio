import React, {useState} from "react";
import { Link, useLocation } from 'react-router-dom';


export default function HamburgerNavMenu() {

    const currentPage = useLocation().pathname;

    const [navActive, setNavActive] = useState(false);

    const handleNavToggle = () => {
        console.log('Toggle Clicked')
        const hamList = document.getElementById('menuList');
        const hamBtn = document.getElementById('menuBtn');
        if (navActive) {
            hamBtn.classList.remove("active-btn");
            hamBtn.classList.add("inactive-btn");
            hamList.classList.remove("active-menu");
            hamList.classList.add("inactive-menu");
        } else {
            hamBtn.classList.remove("inactive-btn");
            hamBtn.classList.add("active-btn");
            hamList.classList.remove("inactive-menu")
            hamList.classList.add("active-menu")
        }
        setNavActive(!navActive);
    }

    return (
        <div>
            <div className=" ham-nav" id="menuBtn">
                <a href="#" onClick={handleNavToggle}>
                    <span className="hn-icon"></span>
                </a>
                <div id="menuList" className="inactive-menu">
                    <ul className="mt-3">
                    <li className="menu-item">
                            <a>       
                                <Link
                                to="/"
                                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                                className={currentPage === '/' ? 'menu-item-current' : 'menu-item'}
                                onClick={handleNavToggle}
                            >
                                <span>home</span>
                            </Link>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <Link
                                to="/About"
                                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={currentPage === '/About' ? 'menu-item-current' : 'menu-item'}
                                onClick={handleNavToggle}
                            >
                                <span>about me</span> 
                            </Link>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <Link
                                to="/Work"
                                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={currentPage === '/Work' ? 'menu-item-current' : 'menu-item'}
                                onClick={handleNavToggle}
                            >
                                <span>my work</span>
                            </Link>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a>
                            <Link
                                to="/Contact"
                                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={currentPage === '/Contact' ? 'menu-item-current' : 'menu-item'}
                                onClick={handleNavToggle}
                            >
                                <span>let's chat</span>
                            </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

