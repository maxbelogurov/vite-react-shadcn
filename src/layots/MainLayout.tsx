import { Outlet } from 'react-router-dom'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <div className="relative flex min-h-screen flex-col">
        <Header/>
        <main className="flex-1">
          <div className="container mx-auto my-6">
            <Outlet/>
          </div>
        </main>
        <Footer/>
      </div>
    </div>  
  )
}