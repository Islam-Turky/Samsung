import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "/sharp.png";

function NavScrollExample() {
  return (
    <Navbar dir='rtl' expand="lg" className="p-4 bg-body-tertiary position-fixed z-3 w-100 top-0">
      <Container fluid>
        <a href="#">
          <img src={logo} width={150} height={40} alt="logo" />
        </a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#who" style={{ fontSize:20, fontWeight:"bold" }} >من نحن</Nav.Link>
            <Nav.Link href="#service" style={{ fontSize:20, fontWeight:"bold" }}>خدمتنا</Nav.Link>
            <Nav.Link href="#contact" style={{ fontSize:20, fontWeight:"bold" }}>تواصل معنا</Nav.Link>
            <Nav.Link href="#contact" style={{ fontSize:20, fontWeight:"bold" }}>الدعم</Nav.Link>
            <Nav.Link href="#service" style={{ fontSize:20, fontWeight:"bold" }}>الأعمال</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;