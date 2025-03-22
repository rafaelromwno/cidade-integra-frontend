import { useState } from "react";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <h1 className="text-3xl font-bold underline text-verde-paleta">
          Hello world!
        </h1>
      </Layout>
    </>
  );
}

export default App;
