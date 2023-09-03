import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className='border p-4 d-flex justify-content-between'>
      <div className='border d-flex align-items-center'>
        <a className='c-nav pe-2 border text-decoration-none'>
        <Link
            to="/"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Matthew Alfaro
          </Link>
        </a>
        <span className='c-nav-two mb-1 pe-2 text-uppercase border'>
          Front-End Developer | Graphic Designer
        </span>
      </div>
      <div className="border nav">
        <a className="c-nav border nav-item text-decoration-none">
          <Link
            to="/About"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
          >
            about
          </Link>
        </a>
        <a className="c-nav border nav-item text-decoration-none">
          <Link
            to="/Work"
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Work' ? 'nav-link active' : 'nav-link'}
          >
            work
          </Link>
        </a>
        <a className="c-nav border nav-item text-decoration-none">
          <Link
            to="/Contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            contact
          </Link>
        </a>
      </div>
    </div>
  );
}

export default NavTabs;
