import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className='mx-4 p-4 border-top  d-flex justify-content-between'>

    </div>
  );
}

export default NavTabs;
