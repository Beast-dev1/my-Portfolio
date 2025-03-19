import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'

// Ensure this is the ONLY root route definition
export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </>
  )
})