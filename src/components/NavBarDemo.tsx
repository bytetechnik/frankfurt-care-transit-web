
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { 
      name: 'Home', 
      url: '#home', 
      icon: Home,
      onClick: () => {
        const element = document.getElementById('home')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    },
    { 
      name: 'About', 
      url: '#about', 
      icon: User,
      onClick: () => {
        const element = document.getElementById('about')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    },
    { 
      name: 'Services', 
      url: '#services', 
      icon: Briefcase,
      onClick: () => {
        const element = document.getElementById('services')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    },
    { 
      name: 'Contact', 
      url: '#contact', 
      icon: FileText,
      onClick: () => {
        const element = document.getElementById('contact')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  ]

  return <NavBar items={navItems} />
}
