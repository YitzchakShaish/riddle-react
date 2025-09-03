import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../AppRoutes";
import Game from "../components/Game";

export default function Play() {
  const user = useContext(UserContext)
  console.log(user)



  return (
    <>
      <div className="play-page">
        <h1>Play</h1>
        <h2>Helo {user.name} </h2>
        <Game></Game>
        <div className="play-buttons">
      
           <Link to="/admin" className="button">
           Admin Panel
          </Link>

          <Link to="/" className="button-home button">
            Back to Home
          </Link>
          <Link to="/logout" className="button">
            Exit
          </Link>
        </div>

      </div>
    </>
  )
}
