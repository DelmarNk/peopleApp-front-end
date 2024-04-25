import { Route, Routes } from "react-router-dom"
import People from "../pages/People"
import Show from "../pages/Show"
import Update from "../pages/Update"
import AuthForm from "../pages/AuthForm"

function Main({currentUser, getUser, isAuthenticated, handleLogin, handleLogout, handleRegister}) {
  return (
    <div className="main">
        <Routes>
            <Route path="/" element={<People />}/>
            <Route path="/:id" element={<Show />}/>
            <Route path="/update/:id" element={<Update />}/>
            <Route path="/login" element={<AuthForm authFunction={handleLogin} login />}/>
            <Route path="/register" element={<AuthForm authFunction={handleRegister} />}/>
        </Routes>
    </div>
  )
}

export default Main