import { Link } from "react-router";

export default function Signup() {
    return (
        <><div className="signup-page">
            <div className="fild">
                <strong>name: </strong>
                <input type="text" placeholder="enter your name: " />
            </div>

            <div className="fild">
                <strong>password: </strong>
                <input type="number" placeholder="enter your password: " />
            </div>
            <div className="signup-buttons">
                <button>Register</button>
                  <button>Register and Play</button>
                <Link to="/" className="btn btn-primary">
                    Back to Home
                </Link>
            </div>

        </div>
        </>
    )
}
