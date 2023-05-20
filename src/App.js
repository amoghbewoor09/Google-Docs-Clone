import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SideNavbar from './components/SideNavbar';
import RulerContainer from './components/RulerContainer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <SideNavbar />
      <RulerContainer />
    </div>
  );
}

export default App;
