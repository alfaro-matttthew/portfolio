import ButtonPillNav from "../components/ButtonPillNav";

export default function Home() {

  const color = {
    color: '#28231D'
  }

  return (
    <div className="min-vh-100 row">
      <div className=" col-12 col-lg-5 home-start d-flex align-items-center">
        <div className=" w-100 px-3 d-flex flex-column align-items-start justify-content-center" style={ color }>
          <span className="home-back font-serif fs-3 lh-1">creative</span>
          <h1 className="stroke font-san-serif title lh-1 text-uppercase">
            Graphic Designer & Front-End Developer
          </h1>
          <span className="home-back font-serif fs-3 lh-1">based in tampa, florida</span>
          <ButtonPillNav title={"Let's Chat"} path={'/Contact'} style={{color: '#28231D'}}/>
        </div>
      </div>
      <div 
        className="home-end col-12 col-lg-7 d-none d-lg-block"
      >

      </div>
    </div>
  );
}
