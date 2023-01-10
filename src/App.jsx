import { Route, Routes } from "react-router-dom";
import Inicio from "./Components/Inicio";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Inicio/>} />
      </Routes>
    </>
    
  )
};

export default App;
