import React from 'react';
import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import { SiKoFi } from 'react-icons/si';

import { Link } from './Router';
import Logo from './Logo';
import ServerStatus from './ServerStatus';

export default function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="md"
      bg="dark"
      variant="dark"
      className="py-0"
    >
      <Container fluid>
        <Navbar.Brand>
          <Link className="p-1" to="/">
            <Logo className="navigation__logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Link role="button" className="nav-link" to="/">Home</Link>
            <Link role="button" className="nav-link" to="/account/create">Create Account</Link>
            <Link role="button" className="nav-link" to="/faq">Faq</Link>
            <Link role="button" className="nav-link" to="/downloads">Downloads</Link>

            <Nav.Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/The-Alpha-Project"
            >
              <FaGithub size={18} className="me-2" />
              Github
            </Nav.Link>
            <Nav.Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/RzBMAKU"
            >
              <FaDiscord size={18} className="me-2" />
              Discord
            </Nav.Link>
            <Nav.Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://ko-fi.com/R6R21LO82"
            >
              <SiKoFi size={24} className="me-2" />
              Support on Ko-fi
            </Nav.Link>

          </Nav>
          <Nav>

            <Nav.Link>
              <ServerStatus name="Kalidar 1.12" realmlist="http://logon1.thealphaproject.eu" />
            </Nav.Link>
            <Nav.Link>
              <ServerStatus name="PTR 0.5.3" realmlist="http://logon1.thealphaproject.eu" />
            </Nav.Link>

            {/* <Nav.Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/The-Alpha-Project"
            >
              <FaGithub size={18} />
            </Nav.Link>
            <Nav.Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/RzBMAKU"
            >
              <FaDiscord size={18} />
            </Nav.Link>
            <Nav.Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://ko-fi.com/R6R21LO82"
            >
              <SiKoFi size={24} className="me-2" />
              Support on Ko-fi
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
