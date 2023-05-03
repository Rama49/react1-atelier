import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Nave = () => {
  return (
    <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#Acceuil" className="pe-5 text-danger fw-bold" >Acceuil</Nav.Link>
            <Nav.Link href="#Activite" className="pe-5 text-danger fw-bold">Activite</Nav.Link>
            <Nav.Link href="#Contact"  className="pe-5 text-danger fw-bold">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nave;