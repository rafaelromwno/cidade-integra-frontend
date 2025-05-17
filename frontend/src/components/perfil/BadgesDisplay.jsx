import { getUserBadges } from "@/lib/badges/getUserBadges"

const BadgesDisplay = ({ user }) => {
  const badges = getUserBadges(user)

  if (badges.length === 0) return null

  return (
    <>
      {badges.map((badge) => (
        <span
          key={badge.id}
          className="font-semibold"
        >
          {badge.label}
        </span>
      ))}
    </>
  )
}

export default BadgesDisplay