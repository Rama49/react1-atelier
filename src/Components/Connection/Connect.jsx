import logo from "../../Components/Images/logo.png";
import { Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';


const Connect = () => {
    return(
        <form className="pt-5">
            <div className="container col-lg-4 col-sm-6 col-md-12 bg-ligth shadow mt-1">
                <div className="">
                    <div className="justify-content-center d-flex pt-3 pb-2">
                        <img src={logo} className="" />
                    </div>
                    <h1 className=" text-center">Connexion</h1>
                    <Form.Label>Email:</Form.Label>
                    <input type="text" className="form-control"/>
                    <Form.Label>Mot de Passe:</Form.Label>
                    <input type="text" className="form-control mb-3" />
                    <div className="mb-3 float-end mb-2">
                    <Link to="/Oublie" className="text-danger">Mot de passe oublier</Link>
                    </div>
                    <div className="">
                       <Link to="/Homes" className="text-white  mb-3 mt-2 bg-success d-flex justify-content-center w-100 text-decoration-none">Se Connecter</Link>
                    </div>
                    <div className="mb-3 text-center justify-content-end d-flex">
                    <Link to="/Inscrit" className="text-danger mb-3">S'inscrire</Link>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Connect