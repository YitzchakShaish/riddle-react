import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav >
      <NavLink to="/" className="me-3 btn btn-link">
        Home
      </NavLink>
      <NavLink to="/login" className="me-3 btn btn-link">
        Login
      </NavLink>
      <NavLink to="/signup" className="me-3 btn btn-link">
        Signup
      </NavLink>
      <NavLink to="/play" className="me-3 btn btn-link">
        Play
      </NavLink>
    </nav>
  );
}
