export default function Home() {

  const color = {
    color: '#28231D'
  }

  return (
    <div className="min-vh-100 d-flex align-items-stretch">
      <div className="border w-50 d-flex justify-content-center">
        <div className="w-50 d-flex flex-column" style={ color }>
          <span>Creative</span>
          <h1 className="border test">
            Front-End Development
          </h1>
          <span>Based in Tampa, FL</span>
          <a>Let's Chat</a>
          </div>
      </div>
      <div className="border w-50">
        //me
      </div>
    </div>
  );
}
