// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';

import "./app.css";

function App() {

  const background = {
    backgroundColor: '#FAF5EF'
  }

  const color = {
    color: '#28231D'
  }
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div style={ background }>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
