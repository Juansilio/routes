import { HashRouter, Route, Router, Routes } from "react-router-dom";
import Inicio from "./Components/Inicio";

function App() {
  return (
    <Router>
    <Nav />
    <Routes>
      <Route path="/" element={Inicio} />
      </Routes>
    </Router>
    
  )
};

export default App;
