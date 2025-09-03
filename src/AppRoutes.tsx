import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Game from "./pages/Play";
import Logout from "./pages/Logout";
import { createContext } from "react";
import Admin from "./pages/Admin";

export const UserContext = createContext<{
  name: string | null;
  id: number | null;
  token: string | null;
}>({
  name: '',
  id: 0,
  token: '',
});
export default function AppRoutes() {

  return (
    <UserContext.Provider value={{ name: 'Guest', id: 0, token: '' }}>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/play" element={<Game />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/logout" element={<Logout />} />

      </Routes>
    </UserContext.Provider>

  )
}
