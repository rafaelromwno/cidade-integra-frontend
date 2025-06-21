import React from "react"
import { motion } from "framer-motion"
import { Monitor, MessageSquare, User } from "lucide-react"

const FAQNavigation = ({ activeSection, categories }) => {
  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case "platform":
        return <Monitor className="h-4 w-4" />
      case "reports":
        return <MessageSquare className="h-4 w-4" />
      case "account":
        return <User className="h-4 w-4" />
      default:
        return null
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="hidden lg:block sticky top-24 w-64">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-azul mb-4">Navegação Rápida</h3>
        <nav className="space-y-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => scrollToSection(category.id)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 flex items-center gap-2 ${
                activeSection === category.id
                  ? 'bg-verde/10 text-verde border-l-2 border-verde'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {getCategoryIcon(category.id)}
              <span className="text-sm font-medium">{category.label}</span>
            </motion.button>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default FAQNavigation
