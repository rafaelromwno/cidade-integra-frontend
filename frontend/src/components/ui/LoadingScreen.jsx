const LoadingScreen = ({ mensagem = "Carregando..." }) => (
  <div className="min-h-screen flex flex-col">
    <main className="flex-grow flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-verde"></div>
        <span className="mt-4 text-verde text-lg font-semibold">{mensagem}</span>
      </div>
    </main>
  </div>
);

export default LoadingScreen;