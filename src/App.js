// import Bloge from "./Components/Blog";
// import Nave from "./Components/Navbare";
// import Secton from "./Components/Section1";
// import Contat from "./Components/Contact";
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Connect from './Components/Connection/Connect';
import Oublie from './Components/Mailverification/Oublie';
import Inscrit from './Components/Inscription/Inscrire';
import Homes from './Components/Home/Home';
import Abouts from './Components/About/Blog';
import Contacts from './Components/Contact/Contact';


function App() {
  return (
    <div className="App container-fluid">
       <Routes>
          <Route index element={<Inscrit />} />
          <Route path="Inscrit" element={<Inscrit />} />
          <Route path="Connect" element={<Connect />} />
          <Route path="Oublie" element={<Oublie />} />
          <Route path="Homes" element={<Homes />} />
          <Route path="Abouts" element={<Abouts />} />
          <Route path="Contacts" element={<Contacts />} />
        </Routes>

    </div>
  );
}

export default App;
