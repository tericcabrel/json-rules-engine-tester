import React, { useState } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from 'reactstrap';

import Playground from "./components/Playground";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="App">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">JSON Rule Engine Tester</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/tericcabrel/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Playground />
    </div>
  );
};

export default App;
