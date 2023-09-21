import { useState } from 'react';
import WebDesignWork from '../components/WebDesignWork';
import GraphicDesignWork from '../components/GraphicDesignWork';


export default function Work() {

  const [activeComponent, setActiveComponent] = useState("A");

  const handleComponentClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const background = {
    backgroundColor: '#FBFCFA'
  }

  const rowHeight = {
    height: "200px"
  }

  const bgImg1 = {
    backgroundImage: "url(/images/lawn-shark.png)",
    backgroundSize: 'cover',
  };

  const bgImg2 = {
    backgroundImage: "url(/images/wallet-wizard.png)",
    backgroundSize: 'cover',
  };

  const bgImg3 = {
    backgroundImage: "url(/images/afk.png)",
    backgroundSize: 'cover',
  };

  const bgImg4 = {
    backgroundImage: "url(/images/core-fashion.png)",
    backgroundSize: 'cover',
  };

  const bgImg5 = {
    backgroundImage: "url(/images/lobby-kink.png)",
    backgroundSize: 'cover',
  };

  const onHover = (e) => {
    console.log('this works');
    const childElement = e.currentTarget.firstChild;
  
    if (childElement) {
      childElement.classList.toggle('d-none'); 
    }
  };


  return (
    <div className="min-vh-100 d-flex flex-column align-items-center">
      <div className=" w-50 m-5 p-2 d-flex justify-content-around">
          <button 
            onClick={() => handleComponentClick("A")}
            className=' mb-4 py-1 px-4 border-0 black-bg fs-4 body-font-w text-uppercase text-decoration-none'
          >
            Web Design
          </button>
          <button 
            onClick={() => handleComponentClick("B")}
            className=' mb-4 py-1 px-4 border-0 black-bg fs-4 body-font-w text-uppercase text-decoration-none'
          >
            Graphic Design
          </button>
      </div>
      <div className=" container">
        {activeComponent === "A" && <WebDesignWork />}
        {activeComponent === "B" && <GraphicDesignWork />}
      </div>
    </div>
  );
}
