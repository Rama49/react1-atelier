import logo from "../Images/logo.png";
import { Link } from "react-router-dom";


const Oublie = () => {
    return(
        <form>
            <div className="container col-4 bg-success">
                <div className="">
                    <img src={logo} />
                    <h1 className="mb-3 text-danger text-center">Connection</h1>
                    <input type="button" placeholder="entrer votre email" className="form-control mb-5" />
                    <div className="mb-3 float-end mb-5">
                    <Link to="/Oublie">Mot de passe oublier</Link>
                    </div>
                    <div className="mb-3">
                       <button type="submit" to="/Inscrit">Envoyer</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Oublie