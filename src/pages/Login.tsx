import { Link } from "react-router";

export default function Login() {
    return (
        <>
        <div className="login-page">
            <div className="fild">
                 <strong>name: </strong>
            <input type="text" placeholder="enter your name: " />
            </div>
           
            <div className="fild">
            <strong>password: </strong>
            <input type="number" placeholder="enter your password: " />
            </div>
            <div className="login-buttons">

            <button>Login</button>
            <Link to="/" className="btn btn-primary">
                Back to Home
            </Link>
            </div>
            </div>
        </>
            )
}
