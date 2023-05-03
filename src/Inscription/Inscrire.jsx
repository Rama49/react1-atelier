import logo from "../Images/logo.png";
import {Link } from "react-router-dom";


const Inscrit = () => {
    return(
        <form>
            <div className="container col-4 bg-success">
                <div className="">
                    <img src={logo} />
                    <h1 className="mb-3 text-danger text-center">S' inscrire</h1>
                    <input type="button" placeholder="entrer votre email" className="form-control mb-3" />
                    <input type="button" placeholder="entrer votre mot de passe" className="form-control mb-3" />
                    <input type="button" placeholder="entrer votre email" className="form-control mb-3" />
                    <input type="button" placeholder="entrer votre mot de passe" className="form-control mb-3" />
                    <div className="mb-3 text-center">
                    <Link to="/Inscrit" className="mb-3">Sinscrire</Link>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Inscrit