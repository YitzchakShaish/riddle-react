import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Game from "./pages/Play";
import Logout from "./pages/Logout";

export default function AppRoutes() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route  path="/login" element={<Login/>}>
        </Route>
          <Route path="/play" element={<Game />} />
          <Route path="/logout" element={<Logout/>}/>
      </Routes>
  )
}
