import { Link } from "react-router";

export default function Play() {
  return (
    <>
      <div className="play-page">Play
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
        <Link to="/logout" className="btn btn-primary">
        Exit
      </Link>
      </div>
    </>
  )
}
