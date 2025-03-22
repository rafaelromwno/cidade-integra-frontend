import { useState } from "react";
import PáginaInicial from "./pages/PáginaInicial";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PáginaInicial />
    </>
  );
}

export default App;