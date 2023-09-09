import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
  const currentPage = useLocation().pathname;

  return (
    <div className='mx-4 mb-5 p-4 border-bottom  d-flex justify-content-between'>
      <div className=' d-flex align-items-center'>
        <a className=' pe-2 font-serif text-decoration-none'>
        <Link
            to="/"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            matthew alfaro
          </Link>
        </a>
        <span className='mb-1 pe-2 fw-light fs-5 font-san-serif text-uppercase '>
          Front-End Developer | Graphic Designer
        </span>
      </div>
      <div className=" nav ">
        <a className="  nav-item font-serif text-decoration-none">
          <Link
            to="/About"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/About' ? 'nav-link active text-dark' : 'nav-link text-dark'}
          >
            about
          </Link>
        </a>
        <a className=" nav-item font-serif text-decoration-none">
          <Link
            to="/Work"
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Work' ? 'nav-link active text-dark' : 'nav-link text-dark'}
          >
            work
          </Link>
        </a>
        <a className=" nav-item font-serif text-decoration-none">
          <Link
            to="/Contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Contact' ? 'nav-link active text-dark' : 'nav-link text-dark'}
          >
            contact
          </Link>
        </a>
      </div>
    </div>
  );
}

export default Footer;
