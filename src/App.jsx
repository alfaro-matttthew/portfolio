// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/navigation/NavTabs';
import HamburgerNavMenu from './components/navigation/HamburgerNavMenu';
import Footer from './components/Footer';

import "./App.css";

function App() {

  const color = {
    color: '#28231D'
  }
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className='site-bg'>
      <HamburgerNavMenu />
      {/* <Nav /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
