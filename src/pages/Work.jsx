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


  return (
    <div className="min-vh-100 d-flex flex-column align-items-center">
      {/* <div className=" w-25 m-5 p-2 d-flex justify-content-around">
          <a className="">Web Design</a>
          <a className="">Graphic Design</a>
      </div> */}
      <div className=" container">
          {/* project one */}
          <div 
            className=" mb-5 bg-img row justify-content-start"
            style={ rowHeight }
          >
            <div className="text-end col-2">
              <h3 className="work-title font-san-serif fs-1 text-uppercase">Project<br/>Three</h3>
              <div className="d-flex flex-column font-serif lh-1">  
                <span>MongoDB</span>
                <span>Express</span>
                <span>React</span>
                <span>Node</span>
              </div>
            </div>
            <div 
              className=" col-5"
              style={ bgImg1 }
            >
            </div>
          </div>
          {/* project two */}
          <div 
            className=" mb-5 row justify-content-start"
            style={rowHeight}
          > 
            <div 
              className=" col-6"
              style={ bgImg2 }
            >
            </div>
            <div className="text-start col-2">
              <h3 className="work-title font-san-serif fs-1 text-uppercase">Wallet<br/>Wizard</h3>
              <div className="d-flex flex-column font-serif lh-1">  
                <span>handlebars</span>
                <span>tailwind</span>
                <span>graph.js</span>
              </div>
            </div>
          </div>
          {/* project three */}
          <div 
            className=" mb-5 row justify-content-end"
            style={rowHeight}
          > 
            <div 
              className=" col-5"
              style={ bgImg3 }
            >
            </div>
            <div className="text-start col-2">
              <h3 className="work-title font-san-serif fs-1 text-uppercase"><br/>AFK</h3>
              <div className="d-flex flex-column font-serif lh-1">  
              <span>DOM Manipulation</span>
                <span>tailwind</span>
              </div>
            </div>
          </div>
          {/* project four */}
          <div 
            className=" mb-5 row justify-content-end"
            style={rowHeight}
          >
            <div 
              className=" col-6"
              style={ bgImg4 }
            >
            </div>
            <div className="text-start col-5">
              <h3 className="work-title font-san-serif fs-1 text-uppercase">CORE<br/>Fashion</h3>
              <div className="d-flex flex-column font-serif lh-1">  
                <span>CSS</span>
                <span>HTML</span>
              </div>
            </div>
          </div>
          {/* project five */}
          <div 
            className=" mb-5 row justify-content-center"
            style={rowHeight}
          >
            <div 
              className=" col-5"
              style={ bgImg5 }
            >
            </div>
            <div className="text-start col-2">
              <h3 className="work-title font-san-serif fs-1 text-uppercase">Lobby<br/>Klink</h3>
              <div className="d-flex flex-column font-serif lh-1">  
                <span>CSS</span>
                <span>HTML</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
