import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
  const currentPage = useLocation().pathname;

  return (
    <div className='mx-3 mb-3 p-4 border-bottom row'>
      <div className=' nav col-12 col-md-6 header-start'>
        <a className='nav-hover  font-serif text-decoration-none'>
        <Link
            to="/"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/' ? 'nav-link active text-dark' : 'nav-link text-dark'}
          >
            <span>matthew alfaro</span>
          </Link>
        </a>
        <div>
          <span className='nav-header fw-light fs-5 font-san-serif text-uppercase'>
            Front-End Developer | Graphic Designer
          </span>
        </div>
      </div>
      <div className=" nav col-12 col-md-6 header-end">
        <a className="nav-hover  nav-item font-serif text-decoration-none">
          <Link
            to="/About"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/About' ? 'nav-link active text-dark' : 'nav-link text-dark'}
          >
            <span>about me</span>
            <svg width="18px" viewBox="0 0 24 24">
              <path d="M5.99992 5C5.73263 5 5.59899 5 5.48344 5.00894C4.12112 5.11436 3.00214 6.12702 2.7617 7.47208C2.7413 7.58617 2.728 7.71915 2.70141 7.98511L2.02072 14.5904M9.99992 15H13.9999M9.99992 15C9.99992 17.2091 8.20914 19 6 19C3.79086 19 2 17.2091 2 15C2 12.7909 3.79086 11 6 11C8.20914 11 9.99992 12.7909 9.99992 15ZM13.9999 15C13.9999 17.2091 15.7909 19 18 19C20.2091 19 22 17.2091 22 15C22 12.7909 20.2091 11 18 11C15.7909 11 13.9999 12.7909 13.9999 15ZM18.015 5C18.2823 5 18.4159 5 18.5315 5.00894C19.8938 5.11436 21.0127 6.12702 21.2532 7.47208C21.2736 7.58617 21.2869 7.71915 21.3135 7.98511L21.9804 14.602"></path>
            </svg>
          </Link>
        </a>
        <a className="nav-hover nav-item font-serif text-decoration-none">
          <Link
            to="/Work"
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Work' ? 'nav-link active text-dark' : 'nav-link text-dark'}
          >
            <span>my work</span>
            <svg width="18px" id="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 19H21M6 17H18C19.1046 17 20 16.1046 20 15V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V15C4 16.1046 4.89543 17 6 17Z"></path> 
            </svg>
          </Link>
          
        </a>

        <a className="nav-hover nav-item font-serif text-decoration-none">
          <Link
            to="/Contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Contact' ? 'nav-link active text-dark' : 'nav-link text-dark'}
          >
            <span>let's chat</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
        </a>
        {/* <a className=" nav-item font-serif text-decoration-none">
          <Link
            to="/TestContact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Contact' ? 'nav-link active text-dark' : 'nav-link text-dark'}
          >
            test contact
          </Link>
        </a> */}
      </div>
    </div>
  );
}

export default Footer;
