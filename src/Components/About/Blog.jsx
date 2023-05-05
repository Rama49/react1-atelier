import  "./Blog.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import tofs from '../Images/tofs.png'
import {Link } from "react-router-dom";


const Abouts = () => {
    return (
        <section className="abouts">
             <Navbar bg="success" className='container-fluid' expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to='/Homes' className="pe-5 text-white fw-bold text-decoration-none" >Acceuil</Link>
            <Link to="/Abouts" className="pe-5 text-white fw-bold text-decoration-none">Activite</Link>
            <Link to="/Contacts"  className="pe-5 text-white fw-bold text-decoration-none">Contact</Link>
          </Nav>
          <div className="row justify-content-end text-end ms-auto"> 
          <div className="col-8 ">
            <Link to="/Connect" className="text-white fw-bold text-decoration-none tofs">Se Deconnecter</Link>
          </div>
          <div className="col">
            <img src={tofs} className='tofs w-75 me-5' />
          </div>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="text-center">
        <h1>About</h1>
    </div>
        </section>
      );
}

export default Abouts;