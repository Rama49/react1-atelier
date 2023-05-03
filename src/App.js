// import Bloge from "./Components/Blog";
// import Nave from "./Components/Navbare";
// import Secton from "./Components/Section1";
// import Contat from "./Components/Contact";
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Connect from './Connection/Connect';
// import Oublie from './Oublier/Oublie';
import Inscrit from './Inscription/Inscrire';


function App() {
  return (
    <div className="App container-fluid">
       <Routes>
          <Route index element={<Connect />} />
          <Route path="Inscrit" element={<Inscrit />} />
          {/* <Route path="Oublie" element={<Oublie />} /> */}
        </Routes>

    </div>
  );
}

export default App;
