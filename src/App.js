import React from 'react';
import logo from './logo.svg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">SweetsHub</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
