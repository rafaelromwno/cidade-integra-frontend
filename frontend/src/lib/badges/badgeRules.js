export const BADGE_RULES = [
  {
    id: "iniciante",
    label: "Iniciante",
    condition: (user) => user.score >= 0 && user.score < 100,
  },
  {
    id: "engajado",
    label: "Engajado",
    condition: (user) => user.score >= 100 && user.score < 500,
  },
  {
    id: "vigilante",
    label: "Vigilante Urbano",
    condition: (user) => user.score >= 500,
  },
  {
    id: "reportador_frequente",
    label: "Reportador Frequente",
    condition: (user) => user.reportCount >= 20,
  },
  {
    id: "verificado",
    label: "Usuário Verificado",
    condition: (user) => user.verified === true,
  },
]