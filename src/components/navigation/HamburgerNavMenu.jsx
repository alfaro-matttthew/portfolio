import React, {useState} from "react";

export default function HamburgerNavMenu() {

    const [navActive, setNavActive] = useState(false);

    const handleNavToggle = () => {
        console.log('Toggle Clicked')
        setNavActive(!navActive);
    }

    return (
        <div>
            <a href="#" className="hn-trigger" onClick={handleNavToggle}>
                <span className="hn-icon"></span>
            </a>
            <div className={`ham-nav ${navActive ? 'hn-active' : ''}`}>
                <ul className="hn-list">
                    <li className="hn-item"><a className="hn-link" href="#">back home</a></li>
                    <li className="hn-item"><a className="hn-link" href="#">about me</a></li>
                    <li className="hn-item"><a className="hn-link" href="#">my work</a></li>
                    <li className="hn-item"><a className="hn-link" href="#">let's chat</a></li>
                </ul>
            </div>
        </div>
    );
};

