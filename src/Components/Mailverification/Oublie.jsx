import logo from "../Images/logo.png";
import {Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';


const Oublie = () => {
    return(
        <form>
            <div className="container col-lg-4 col-sm-6 col-md-12 bg-ligth shadow mt-1">
                   <div className="justify-content-center d-flex pt-2 pb-2">
                      <img src={logo} />
                   </div>
                    <h1 className="mb-3 text-center">S' inscrire</h1>
                    <p className="text-warning text-center">Recuperation de passe par mail !!</p>
                    <Form.Label>Mettez votre mot de passe:</Form.Label>
                    <input type="text" className="form-control mb-3" />
                    <Form.Label>Nouveau mot de passe:</Form.Label>
                    <input type="text" className="form-control mb-3" />
                    <Form.Label>Confirmation:</Form.Label>
                    <input type="text" className="form-control mb-3" />
                    <div className="text-center bg-success mb-3">
                    <Link to="/Connect" className="text-white text-decoration-none">Envoyer</Link>
                    </div><span className="text-white">i</span>  
                    <Link to="/Connect" className="float-end text-success mb-3 text-decoration-none"> <span className="mb-3">retour</span> </Link>
            </div>
        </form>
    )
}
export default Oublie