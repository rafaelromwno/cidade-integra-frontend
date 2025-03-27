import { useState } from "react";
import PaginaInicial from "./pages/PaginaInicial";
import Duvidas from "./pages/Duvidas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Duvidas />
    </>
  );
}

export default App;