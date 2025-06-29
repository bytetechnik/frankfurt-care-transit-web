
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

  return (
    <>
      {/* Logo Header */}
      <div className="fixed top-4 left-4 z-50">
        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
          <img 
            src="/lovable-uploads/95bc8333-1b8b-47ec-8e9a-ff1cabe0ab78.png" 
            alt="OM Krankenwagen und Taxi Logo" 
            className="h-8 w-8 object-contain"
          />
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold text-medical-blue">OM</h1>
            <p className="text-xs text-gray-600">Krankenwagen & Taxi</p>
          </div>
        </div>
      </div>
      
      <NavBar items={navItems} />
    </>
  )
}
