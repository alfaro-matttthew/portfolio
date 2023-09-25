import { useState } from "react";
import Resume from "../components/Resume";
import AboutMe from "../components/AboutMe";
import { activeButton, inactiveButton } from "../../utils/commonClasslist";

export default function About() {

  const [activeComponent, setActiveComponent] = useState("A");

  const toggleComponent = () => {
    setActiveComponent(activeComponent === "A" ? "B" : "A");
  };

  const bgImageStyle = {
    backgroundImage: "url(/images/matthew-alfaro.jpeg)",
    backgroundSize: 'cover',
  };

  return (
    <div className="row mx-3 min-vh-100">
      <div className="col-12 col-lg-3 ">
        <div 
        className="w-100 bg-img image about-img"
        style={bgImageStyle}
        >
        </div>
      </div>
      <div className="d-sm-none">
        <button
          onClick={toggleComponent}
          className={activeComponent === "A" ? inactiveButton : activeButton }
        >
          {activeComponent === "A" ? "View Resume" : "Close Resume"}
        </button>
      </div>
      <div className="col-12 col-md-7 col-lg-6 mt-3">
            {activeComponent === "A" && <AboutMe />}
            {activeComponent === "B" && <Resume />}
      </div>
      <div className="col-12 col-md-5 col-lg-3 mt-3">
          <div className="container d-flex flex-column align-items-center">
            <div className="col-12">
                <h3 className='mb-4 py-1 px-4 black-bg body-font-w text-uppercase'>My Skill Sets</h3>
            </div>

            <div className="col-10">
              <h4 className="border-bottom border-dark font-serif fs-6 text-start">graphic design</h4>
            </div>
            <div className="col-9 mb-3 body-font">
              <li className="list-unstyled lh-sm text-start">Photoshop</li>
              <li className="list-unstyled lh-sm">Illustrator</li>
              <li className="list-unstyled lh-sm text-start">InDesign</li>
              <li className="list-unstyled lh-sm text-start">Premiere</li>
            </div>

            <div className="col-10">
              <h4 className="border-bottom border-dark font-serif fs-6 text-start">languages & frameworks</h4>
            </div>
            <div className="col-9 mb-3 body-font">
              <li className="list-unstyled lh-sm text-start">HTML</li>
              <li className="list-unstyled lh-sm">CSS<span className="text-ssm opacity-75 fst-italic"> + bootstrap & tailwind</span></li>
              <li className="list-unstyled lh-sm text-start">JavaScript</li>
              <li className="list-unstyled lh-sm text-start">React</li>
            </div>

            <div className="col-10 ">
              <h4 className="border-bottom border-dark font-serif fs-6 text-start">responsive design</h4>
            </div>
            <div className="col-9 mb-3 body-font">
              <li className="list-unstyled lh-sm text-start">CSS Grid</li>
              <li className="list-unstyled lh-sm">Flexbox</li>
              <li className="list-unstyled lh-sm text-start">Media Queries</li>
            </div>

            <div className="col-10 ">
              <h4 className="border-bottom border-dark font-serif fs-6 text-start">back-end devlopment</h4>
            </div>
            <div className="col-9 mb-3 body-font">
              <li className="list-unstyled lh-sm text-start">Node.js</li>
              <li className="list-unstyled lh-sm">Express.js</li>
            </div>

            <div className="col-10 ">
              <h4 className="border-bottom border-dark font-serif fs-6 text-start">databases</h4>
            </div>
            <div className="col-9 mb-3 body-font">
              <li className="list-unstyled lh-sm text-start">MySQL</li>
              <li className="list-unstyled lh-sm">MongoDB</li>
            </div>

            <div className="d-none d-sm-block">
              <button
                onClick={toggleComponent}
                className={activeComponent === "A" ? inactiveButton : activeButton }
              >
                {activeComponent === "A" ? "View Resume" : "Close Resume"}
              </button>
            </div>

          </div>
      </div>
    </div>
  );
}
