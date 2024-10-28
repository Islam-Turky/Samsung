import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  return (
    <Navbar dir='rtl' expand="lg" className="p-4 bg-body-tertiary position-fixed z-3 w-100 top-0">
      <Container fluid>
        <img src="/sharp.png" width={150} height={40} alt="" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#who">من نحن</Nav.Link>
            <Nav.Link href="#service">خدمتنا</Nav.Link>
            <Nav.Link href="#contact">تواصل معنا</Nav.Link>
            <Nav.Link href="#contact">الدعم</Nav.Link>
            <Nav.Link href="#service">الأعمال</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;