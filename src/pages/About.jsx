export default function About() {

  const bgImageStyle = {
    backgroundImage: "url(src/assets/images/matthew-alfaro.jpeg)",
    backgroundSize: 'cover',
  };

  return (
    <div className="d-flex min-vh-100">
      <div className=" w-25 mx-5 d-flex justify-content-end">
        <div 
        className="w-75 bg-img image about-img"
        style={bgImageStyle}
        >
        </div>
      </div>
      <div className=" w-50 ">
        <div className="w-75 d-flex flex-column">
          <span className=" font-serif">
            Hello There
          </span>
          <h2 className="font-san-serif text-uppercase">
            My Name is Matthew
          </h2>
          <div className="ps-3 body-font border-start border-3 border-secondary fw-light fs-6">
            <p className="font-bold">
              I am a web and graphic designer with a winning personailty. I specialize in visual identities & branding as well as web & print layout design. My personal style focuses on hand drawn type and illustrations, and creating designs with unique character, but my skill set has a wide range to create for a broad array of stylings. 
            </p>
            <p>
            I have developed a mentality of design centered around a curiosity to learn new techniques and the aspiration to evolve as a designer. As someone to work alongside, I’ve always been considered a “people person” and I take joy working with others, whether that is in person or over email. So no matter who I am working with, or what I am working on, my desire is to contribute something awe-inspiring to this world and to have fun with others while doing it. 
            </p>
            <p>
            Outside of designing, you can find me riding my bicycle, spending money on a new board game, or playing whatever new instrument I acquired that month to experiment with. The most recent instrument I bought was a melodica which is basically a tiny, mouth piano. So if you are not interested in my design skills but are still interested in hearing whatever song I’ve learned on melodica, hit me up. 
            </p>
          </div>
        </div>
      </div>
      <div className="w-25">
          
      </div>
    </div>
  );
}
