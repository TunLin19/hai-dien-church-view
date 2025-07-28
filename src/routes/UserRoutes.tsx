import { Route, Routes } from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'
import About from '../pages/About'
import Events from '../pages/Events'
import Home from '../pages/Home'
import NotFound from '../error/NotFound'
import  Contact from '../pages/Contact'

export default function UserRoutes() {
  return (
    <UserLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserLayout>
  )
}
