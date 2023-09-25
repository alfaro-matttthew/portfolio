import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className='mx-4 p-4 border-top row'>
      <div className=' col-12 col-md-6 footer-start'>
        <h6>Let's Design Today, to Create a Better Tomorrow.</h6>
      </div>
      <div className=' text-center col-12 col-md-6'>
        <div className=' footer-end'>
          <span>matthewealfaro@gmail.com</span>
        </div>
        <div className='footer-end'>
          <a
              href='https://github.com/alfaro-matttthew'
              target='_blank'
              className='mx-2'
            >
              <img src='/svg/icons8-github-25.svg'/>
            </a>
            <a
              href='https://www.linkedin.com/in/alfaro-matthew/'
              target='_blank'
              className='mx-2'
            >
              <img src='/svg/icons8-linkedin-25.svg'/>
            </a>
            <a
              href='https://www.behance.net/matthewalfaro2'
              target='_blank'
              className='mx-2'
            >
              <img src='/svg/icons8-behance-25.svg'/>
            </a>
            <a
              href='https://dribbble.com/alfaro-matthew'
              target='_blank'
              className='mx-2'
            >
              <img src='/svg/icons8-dribbble-25.svg'/>
            </a>
        </div>
          

      </div>
    </div>
  );
}

export default NavTabs;
