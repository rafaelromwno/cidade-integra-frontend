const AuthNotice = () => (
  <div className="bg-red-100 border border-red-400 text-red-600 px-4 py-3 rounded relative m-4" role="alert">
    <strong className="font-medium">Atenção: </strong>
    <span className="block sm:inline">
      Você precisa estar logado para realizar uma denúncia.
    </span>
  </div>
);

export default AuthNotice;
