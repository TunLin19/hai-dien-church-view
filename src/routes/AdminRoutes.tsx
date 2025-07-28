import { Routes, Route} from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import NotFound from '../error/NotFound'

// function RequireAdmin({ children }) {
//   // TODO: Thay bằng logic kiểm tra quyền admin thực tế
//   const isAdmin = localStorage.getItem('role') === 'admin'
//   return isAdmin ? children : <Navigate to="/" />
// }

export default function AdminRoutes() {
  return (
    // <RequireAdmin>
      <AdminLayout>
        <Routes>
          <Route path="/dashboard" element={<div>Admin Dashboard</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AdminLayout>
    // </RequireAdmin>
  )
}