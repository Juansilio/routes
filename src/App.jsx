import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Inicio from "./Components/Inicio";
import ProyectosContenedor from "./Components/Proyectos/ProyectosContenedor";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/proyectos" element={<ProyectosContenedor/>} />
      </Routes>
    </>
    
  )
};

export default App;
