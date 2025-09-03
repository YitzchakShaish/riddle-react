import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav >
      <NavLink to="/" className="button">
        Home
      </NavLink>
      <NavLink to="/login" className="button">
        Login
      </NavLink>
      <NavLink to="/signup" className="button">
        Signup
      </NavLink>
      <NavLink to="/play" className="button">
        Play
      </NavLink>
    </nav>
  );
}
