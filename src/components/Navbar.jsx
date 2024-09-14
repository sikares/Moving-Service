import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import DarkModeToggle from 'react-dark-mode-toggle'

function NavScrollExample({ darkMode, toggleMode }) {
  return (
    <Navbar
      expand="lg"
      className={darkMode ? 'navbar-dark fixed-top' : 'navbar-light fixed-top'}
      style={{ backgroundColor: darkMode ? '#343a40' : '#f3f4f6' }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <i
            className={`bi bi-box-seam me-1 ${
              darkMode ? 'text-light' : 'text-dark'
            }`}
          ></i>
          Move It
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '260px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex align-items-center">
            <DarkModeToggle
              onChange={toggleMode}
              checked={darkMode}
              size={60}
              className="me-2"
            />
            <Form className="d-flex me-2" style={{ flex: 1, width: '100%' }}>
              <Form.Control
                type="search"
                placeholder="Postcode"
                className="me-2"
                aria-label="Postcode"
              />
              <Button variant="btn btn-success">Check</Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavScrollExample
