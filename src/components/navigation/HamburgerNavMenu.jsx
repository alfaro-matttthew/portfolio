export default function HamburgerNavMenu() {
    return (
        <div>
            <a href="#" className="hn-trigger"><span className="hn-icon"></span></a>
            <div className="ham-nav">
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

