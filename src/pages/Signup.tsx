import { Link } from "react-router";

export default function Signup() {
    return (
        <><div className="signup-page">
        <strong>name: </strong><br />
            <input type="text" placeholder="enter your name: " />
            <br />
            <strong>password: </strong><br />
            <input type="number" placeholder="enter your password: " />
            <button>Register</button>
            <Link to="/" className="btn btn-primary">
                Back to Home
            </Link>
            </div>
        </>
    )
}
