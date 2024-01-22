import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/navigation/NavTabs';
import HamburgerNavMenu from './components/navigation/HamburgerNavMenu';
import Footer from './components/Footer';

import "./App.css";

function App() {

  // const [isMobile, setIsMobile] = useState(true);

  const isMobileDevice = window.matchMedia('(max-width: 991px)').matches;

  // if (!isMobileDevice) {
  //   setIsMobile(!isMobile);
  // }

  const color = {
    color: '#28231D'
  }
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className='site-bg'>
      {isMobileDevice ? 
        <HamburgerNavMenu />
      :
        <Nav />
      }
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
