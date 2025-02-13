import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const location = useLocation()

  return (
    <header className="w-full border-b">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <h1 className="text-xl font-semibold">Vite + React</h1>
        <nav className="flex gap-4">
          <Button 
            variant={location.pathname === "/" ? "secondary" : "ghost"} 
            asChild
          >
            <Link to="/">Home</Link>
          </Button>
          <Button 
            variant={location.pathname === "/demo" ? "secondary" : "ghost"} 
            asChild
          >
            <Link to="/demo">Demo</Link>
          </Button>
        </nav>
        <div></div>
      </div>
    </header>
  )
}