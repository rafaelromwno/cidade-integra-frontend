import BemVindo from "../components/BemVindo";
import NossosValores from "../components/NossosValores";
import NossaEquipe from "../components/NossaEquipe";
import Layout from "../components/Layout";

function PáginaInicial() {
  return (
    <Layout>
      <BemVindo />
      <NossosValores />
      <NossaEquipe />
    </Layout>
  );
}

export default PáginaInicial;
