import { useRef, useState } from "react";
import { Link } from "react-router";
import { signupTS } from "../api/authApi";

export default function Signup() {
    const userRef = useRef<{ name: string; password: string; role: string }>({
        name: "",
        password: "",
        role: "user"
    });
    const [response, setRespons] = useState('');

    async function sign() {
        const response = await signupTS(userRef.current.name, userRef.current.password, userRef.current.role)
        console.log(response);
        if (response.status === 201) {
            console.log('Signup successful!');
            setRespons('Signup successful!');
            return response.json();
        } else if (response.status === 409) {
            console.log('User already exists. Redirecting to login...');
            setRespons('User already exists. Redirecting to login...');

            // return await handleLogin(name);
        } else {
            console.log('Signup failed:', response.json());
            setRespons('Signup failed:');
            return null;
        }
    }
    return (
        <div className="signup-page">
            <form className="form sginup-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    sign();
                }}
            >
                <div className="fild">
                    <strong>user name: </strong>
                    <input
                        type="text"
                        onChange={(e) => (userRef.current.name = e.target.value)}
                        placeholder="enter your name: "
                        required
                        minLength={4}
                    />
                </div>

                <div className="fild">
                    <strong>password: </strong>
                    <input
                        type="password"
                        onChange={(e) => (userRef.current.password = e.target.value)}
                        placeholder="enter your password: "
                        required
                        minLength={4}
                    />
                </div>

                <div className="signup-buttons">
                    <button type="submit" className="button">
                        Signup
                    </button>

                </div>
            </form>
            <Link to="/" className="button-home button">
                Back to Home
            </Link>
        </div>
    );
}
