export default function Work() {

  const background = {
    backgroundColor: '#FBFCFA'
  }

  const rowHeight = {
    height: "200px"
  }

  const bgImg1 = {
    backgroundImage: "url(src/assets/images/josep-martins-l3-erg8nPRU-unsplash.jpg)",
    backgroundSize: 'cover',
  };

  const bgImg2 = {
    backgroundImage: "url(src/assets/images/wallet-wizard.png)",
    backgroundSize: 'cover',
  };

  const bgImg3 = {
    backgroundImage: "url(src/assets/images/afk.png)",
    backgroundSize: 'cover',
  };

  const bgImg4 = {
    backgroundImage: "url(src/assets/images/core-fashion.png)",
    backgroundSize: 'cover',
  };

  const bgImg5 = {
    backgroundImage: "url(src/assets/images/lobby-kink.png)",
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
      {/* <div className=" w-25 m-5 p-2 d-flex justify-content-around">
          <a className="">Web Design</a>
          <a className="">Graphic Design</a>
      </div> */}
      <div className=" container">
          {/* project one */}
          <div 
            className="mb-5 bg-img gx-0 row justify-content-start"
            style={ rowHeight }
          >
            <div className="mx-2 text-end col-2">
              <h3 className="mt-2 work-title font-san-serif fs-1 lh-1 text-uppercase">Lawn<br/>Shark</h3>
              <div className="d-flex flex-column body-font lh-sm">  
                <span>MongoDB</span>
                <span>Express</span>
                <span>React</span>
                <span>Node</span>
              </div>
            </div>
            {/* Image */}
            <div 
              className=" col-5"
              style={ bgImg1 }
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              <div id="p1" className="d-none h-100 black-transparent d-flex justify-content-center align-items-center">
                <a href="#" className="px-2 font-serif-w text-decoration-none">live site</a>
                <a href="https://github.com/Jlausier/LawnShark" target="_blank" className="px-2 border-start font-serif-w text-decoration-none">github repo</a>
                {/* <a href="#" className="px-2 font-serif-w text-decoration-none">case study</a> */}
              </div>
            </div>
          </div>
          {/* project two */}
          <div 
            className=" mb-5 gx-0 row justify-content-start"
            style={rowHeight}
          > 
            <div 
              className=" col-6"
              style={ bgImg2 }
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              <div id="p1" className=" d-none h-100 black-transparent d-flex justify-content-center align-items-center">
                <a href="https://still-spire-90353-025f487cfe63.herokuapp.com" target="_blank" className="px-2 font-serif-w text-decoration-none">live site</a>
                <a href="https://github.com/Jlausier/WalletWizzard" target="_blank" className="px-2 border-start font-serif-w text-decoration-none">github repo</a>
                {/* <a href="#" className="px-2 font-serif-w text-decoration-none">case study</a> */}
              </div>
            </div>
            <div className="mx-2 text-start col-2">
              <h3 className="mt-2 work-title font-san-serif fs-1 text-uppercase">Wallet<br/>Wizard</h3>
              <div className="d-flex flex-column body-font lh-sm">   
                <span>Handlebars</span>
                <span>Tailwind</span>
                <span>Graph.js</span>
              </div>
            </div>
          </div>
          {/* project three */}
          <div 
            className=" mb-5 gx-0 row justify-content-end"
            style={rowHeight}
            
          > 
            <div 
              className=" col-5"
              style={ bgImg3 }
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              <div id="p1" className=" d-none h-100 black-transparent d-flex justify-content-center align-items-center">
                <a href="https://jlausier.github.io/AFK-Coop/" target="_blank" className="px-2 font-serif-w text-decoration-none">live site</a>
                <a href="https://github.com/Jlausier/AFK-Coop" target="_blank" className="px-2 border-start  font-serif-w text-decoration-none">github repo</a>
                {/* <a href="#" className="px-2 font-serif-w text-decoration-none">case study</a> */}
              </div>
            </div>
            <div className="mx-2 text-start col-2">
              <h3 className="mt-2 work-title font-san-serif fs-1 text-uppercase"><br/>AFK</h3>
              <div className="d-flex flex-column body-font lh-sm">   
              <span>DOM Manipulation</span>
                <span>Tailwind</span>
              </div>
            </div>
          </div>
          {/* project four */}
          <div 
            className=" mb-5 gx-0 row justify-content-end"
            style={rowHeight}
          >
            <div 
              className=" col-6"
              style={ bgImg4 }
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              <div id="p1" className=" d-none h-100 black-transparent d-flex justify-content-center align-items-center">
                <a href="#" className="px-2 font-serif-w text-decoration-none">live site</a>
                <a href="#" className="px-2 border-start  font-serif-w text-decoration-none">github repo</a>
                {/* <a href="#" className="px-2 font-serif-w text-decoration-none">case study</a> */}
              </div>
            </div>
            <div className="mx-2 text-start col-5">
              <h3 className="mt-2 work-title font-san-serif fs-1 text-uppercase">CORE<br/>Fashion</h3>
              <div className="d-flex flex-column body-font lh-sm">   
                <span>CSS</span>
                <span>HTML</span>
              </div>
            </div>
          </div>
          {/* project five */}
          <div 
            className=" mb-5 gx-0 row justify-content-center"
            style={rowHeight}
          >
            <div 
              className=" col-5"
              style={ bgImg5 }
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              <div id="p1" className=" d-none h-100 black-transparent d-flex justify-content-center align-items-center">
                <a href="#" className="px-2 font-serif-w text-decoration-none">live site</a>
                <a href="#" className="px-2 border-start  font-serif-w text-decoration-none">github repo</a>
                {/* <a href="#" className="px-2 font-serif-w text-decoration-none">case study</a> */}
              </div>
            </div>
            <div className="mx-2 text-start col-2">
              <h3 className="mt-2 work-title font-san-serif fs-1 text-uppercase">Lobby<br/>Klink</h3>
              <div className="d-flex flex-column body-font lh-sm">   
                <span>CSS</span>
                <span>HTML</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
