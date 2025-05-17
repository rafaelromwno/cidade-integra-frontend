export function mapAuthError(error) {
  const code = error.code;
  const messages = {
    "auth/user-not-found": "Usuário não encontrado.",
    "auth/invalid-credential":
      "Credenciais inválidas. Verifique e tente novamente.",
    "auth/email-already-in-use": "Este e-mail já está em uso.",
    "auth/invalid-email": "E-mail inválido.",
    "auth/weak-password": "A senha deve ter pelo menos 6 caracteres.",
    "auth/popup-closed-by-user": "Login cancelado pelo usuário.",
    "auth/popup-blocked":
      "O navegador bloqueou a janela de login. Permita pop-ups e tente novamente.",
    "auth/cancelled-popup-request":
      "A solicitação de login foi cancelada. Tente novamente.",
    "auth/account-exists-with-different-credential":
      "Já existe uma conta com este e-mail usando outro método de login.",
    "auth/operation-not-allowed":
      "O método de login está desativado. Contate o suporte.",
    "auth/network-request-failed":
      "Erro de conexão. Verifique sua internet e tente novamente.",
    "auth/too-many-requests": "Muitas tentativas. Tente novamente mais tarde.",
  };

  return messages[code] || `Erro desconhecido (${code}). Tente novamente.`;
}