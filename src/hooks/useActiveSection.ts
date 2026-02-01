import { useState, useEffect } from "react"

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        if (!section) continue
        const { offsetTop, offsetHeight } = section
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id)
          break
        }
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds])

  return activeSection
}
