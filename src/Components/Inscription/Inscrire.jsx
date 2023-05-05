import logo from "../Images/logo.png";
import {Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';


const Inscrit = () => {
    return(
        <form>
            <div className="container col-lg-4 col-sm-6 col-md-12 bg-ligth shadow mt-1">
                <div className="">
                   <div className="justify-content-center d-flex pt-2 pb-2">
                      <img src={logo} />
                   </div>
                    <h1 className="mb-3 text-center">S' inscrire</h1>
                    <p className="text-warning text-center">Veuillez vous inscrire sur notre Plateforme!</p>
                    <Form.Label>Nom:</Form.Label>
                    <input type="text"  className="form-control mb-3" />
                    <Form.Label>Prenom:</Form.Label>
                    <input type="text" className="form-control mb-3" />
                    <Form.Label>Email:</Form.Label>
                    <input type="text"  className="form-control mb-3" />
                    <Form.Label>Mot De Passe:</Form.Label>
                    <input type="text" className="form-control mb-3" />
                    <Form.Label>Confimation De Passe:</Form.Label>
                    <input type="text" className="form-control mb-3" />
                    <div className="mb-3 text-center bg-success">
                    <Link to="/Connect" className="mb-3 w-100 text-white text-decoration-none">S'inscrire</Link>
                    </div>
                    <p className="text-center">Vous avez deja un compte? <Link to="/Connect" className="mb-3 w-100 text-success mb-3 text-decoration-none">connecter Vous!</Link></p>
                </div>
            </div>
        </form>
    )
}
export default Inscrit