import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import UserRoutes from './routes/UserRoutes'
import AdminRoutes from './routes/AdminRoutes'
import Login from './pages/Login'
import SignUp from './pages/Signup'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
