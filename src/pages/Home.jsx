export default function Home() {

  const color = {
    color: '#28231D'
  }

  return (
    <div className="min-vh-100 d-flex align-items-stretch">
      <div className=" w-50 d-flex justify-content-center">
        <div className="w-50 d-flex flex-column align-items-start" style={ color }>
          <span className="font-serif fs-3 lh-1">Creative</span>
          <h1 className="font-san-serif title lh-1 text-uppercase">
            Front-End Development
          </h1>
          <span className="font-serif fs-3 lh-1">Based in Tampa, FL</span>
          <a className="mt-5 px-5 py-2 font-san-serif fw-normal text-uppercase text-decoration-none wide-tracking border border-2 border-dark rounded-pill">Let's Chat</a>
          </div>
      </div>
      <div className=" w-50">
        //me
      </div>
    </div>
  );
}
