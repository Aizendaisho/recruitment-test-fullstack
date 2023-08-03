import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoutes"
import { useUserStore } from "../context/userContext"
import Register from "../components/Register";
import HomePage from "../page/HomePage";

function AppRoute() {
    const user = useUserStore((state) => state.user);
  return (
    <Router>
        <Routes>
        <Route path="" element={<HomePage /> } />
        <Route element={<ProtectedRoute redirectTo="/" isAllowed={!user} />}>
        <Route path="/register" element={<Register/>} />
        </Route>
        </Routes>
    </Router>
  )
}

export default AppRoute