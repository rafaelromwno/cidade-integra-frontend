import { BADGE_RULES } from "./badgeRules"

export const getUserBadges = (user) => {
  return BADGE_RULES.filter((rule) => rule.condition(user))
}