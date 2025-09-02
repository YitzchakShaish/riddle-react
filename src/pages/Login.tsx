import { Link } from "react-router";

export default function Login() {
    return (
        <>
        <div className="login-page">
            <strong>name: </strong><br />
            <input type="text" placeholder="enter your name: " />
            <br />
            <strong>password: </strong><br />
            <input type="number" placeholder="enter your password: " />
            <button>Login</button>
            <Link to="/" className="btn btn-primary">
                Back to Home
            </Link>
            </div>
        </>
            )
}
