// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';

import "./app.css";

function App() {

  const color = {
    color: '#28231D'
  }
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className='site-bg'>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
