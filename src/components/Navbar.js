import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavbarComponent = ({ setSelectedContinent, setSearchTerm, toggleDarkMode, isDarkMode }) => {
  const handleContinentChange = (continent) => {
    setSelectedContinent(continent);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Navbar bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={() => handleContinentChange('All')}>All</Nav.Link>
          <Nav.Link onClick={() => handleContinentChange('Africa')}>Africa</Nav.Link>
          <Nav.Link onClick={() => handleContinentChange('Americas')}>Americas</Nav.Link>
          <Nav.Link onClick={() => handleContinentChange('Asia')}>Asia</Nav.Link>
          <Nav.Link onClick={() => handleContinentChange('Europe')}>Europe</Nav.Link>
          <Nav.Link onClick={() => handleContinentChange('Oceania')}>Oceania</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search Countries"
            className="me-2"
            aria-label="Search"
            onChange={handleSearchChange}
          />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Button variant={isDarkMode ? "outline-light" : "outline-dark"} onClick={toggleDarkMode} className="ms-2">
          {isDarkMode ? '☀️' : '🌙'}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
