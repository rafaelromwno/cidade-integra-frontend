import BemVindo from "../components/PaginaInicial/BemVindo";
import NossosValores from "../components/PaginaInicial/NossosValores";
import NossaEquipe from "../components/PaginaInicial/NossaEquipe";
import Layout from "../components/layout/Layout";

function PaginaInicial() {
  return (
    <Layout>
      <BemVindo />
      <NossosValores />
      <NossaEquipe />
    </Layout>
  );
}

export default PaginaInicial;
