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
        <div className="z-10">

            <div className="mobile-nav-top w-100 px-4 pt-4 border">
                <div>
                    <Link
                        to="/"
                    >
                        <svg id="a" width="52px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 766.67 666.67">
                            <path class="b" d="M166.67,633.33c-36.82,0-66.67-29.85-66.67-66.67v-122.48c0-16.31,0-24.46-1.84-32.13-1.63-6.8-4.33-13.3-7.98-19.27-4.12-6.73-9.89-12.49-21.42-24.02l-35.42-35.42,35.42-35.42c11.53-11.53,17.3-17.3,21.42-24.02,3.66-5.97,6.35-12.47,7.98-19.27,1.84-7.67,1.84-15.83,1.84-32.13V100c0-36.82,29.85-66.67,66.67-66.67m433.33,600c36.82,0,66.67-29.85,66.67-66.67v-122.48c0-16.31,0-24.46,1.84-32.13,1.63-6.8,4.33-13.3,7.98-19.27,4.12-6.73,9.89-12.49,21.42-24.02l35.42-35.42-35.42-35.42c-11.53-11.53-17.3-17.3-21.42-24.02-3.65-5.97-6.35-12.47-7.98-19.27-1.84-7.67-1.84-15.83-1.84-32.13V100c0-36.82-29.85-66.67-66.67-66.67"/>
                            <polyline class="b" points="248.17 465.03 260.3 201.64 280.23 201.64 387.53 439.04 476.04 205.1 505.5 205.1 518.49 465.03"/>
                        </svg>
                    </Link>
                </div>
                <div>
                    <a id="menuBtn" onClick={handleNavToggle}>
                        <span className="hn-icon"></span>
                    </a>
                </div>
            </div>
            <div id="menuList" className="inactive-menu">
                <ul className="mt-3">
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




            {/* <div className="ham-nav" id="menuBtn">
                    <a href="#" onClick={handleNavToggle}>
                        <span className="hn-icon"></span>
                    </a>
                    <svg id="a" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 766.67 666.67">
                        <path class="b" d="M166.67,633.33c-36.82,0-66.67-29.85-66.67-66.67v-122.48c0-16.31,0-24.46-1.84-32.13-1.63-6.8-4.33-13.3-7.98-19.27-4.12-6.73-9.89-12.49-21.42-24.02l-35.42-35.42,35.42-35.42c11.53-11.53,17.3-17.3,21.42-24.02,3.66-5.97,6.35-12.47,7.98-19.27,1.84-7.67,1.84-15.83,1.84-32.13V100c0-36.82,29.85-66.67,66.67-66.67m433.33,600c36.82,0,66.67-29.85,66.67-66.67v-122.48c0-16.31,0-24.46,1.84-32.13,1.63-6.8,4.33-13.3,7.98-19.27,4.12-6.73,9.89-12.49,21.42-24.02l35.42-35.42-35.42-35.42c-11.53-11.53-17.3-17.3-21.42-24.02-3.65-5.97-6.35-12.47-7.98-19.27-1.84-7.67-1.84-15.83-1.84-32.13V100c0-36.82-29.85-66.67-66.67-66.67"/>
                        <polyline class="b" points="248.17 465.03 260.3 201.64 280.23 201.64 387.53 439.04 476.04 205.1 505.5 205.1 518.49 465.03"/>
                    </svg>
            </div>
            <div>
                <div>
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
            </div> */}
        </div>
    );
};

