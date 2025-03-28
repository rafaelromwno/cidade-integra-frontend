import { useState } from "react";
import PaginaInicial from "./pages/PaginaInicial";
import Duvidas from "./pages/Duvidas";
import Denuncia from "./pages/Denuncia";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Denuncia />
    </>
  );
}

export default App;