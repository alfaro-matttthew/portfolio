import ButtonPillNav from "../components/ButtonPillNav";

export default function Home() {

  const color = {
    color: '#28231D'
  }

  const bgImageStyle = {
    backgroundImage: "url(./images/matthew-01.png)",
    backgroundSize: 'cover',
  };

  return (
    <div className="min-vh-100 row">
      <div className="col-5 d-flex justify-content-center">
        <div className="w-50 d-flex flex-column align-items-start justify-content-center" style={ color }>
          <span className="font-serif fs-3 lh-1">creative</span>
          <h1 className="font-san-serif title lh-1 text-uppercase">
            Front-End Developer
          </h1>
          <span className="font-serif fs-3 lh-1">based in tampa, florida</span>
          <ButtonPillNav title={"Let's Chat"} path={'/Contact'} style={{color: '#28231D'}}/>
        </div>
      </div>
      <div 
        className="col-7"
        style={bgImageStyle}
      >

      </div>
    </div>
  );
}
