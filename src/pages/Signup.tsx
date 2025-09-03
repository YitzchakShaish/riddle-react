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
        <><div className="signup-page">
            <div className="fild">
                <strong>name: </strong>
                <input type="text"
                    defaultValue={userRef.current.name}
                    onChange={(e) => (userRef.current.name = e.target.value)}
                    placeholder="enter your name: "
                    required
                    minLength={4} />
            </div>

            <div className="fild">
                <strong>password: </strong>
                <input type="password"
                    defaultValue={userRef.current.password}
                    onChange={(e) => (userRef.current.password = e.target.value)}
                    placeholder="enter your password: "
                    required
                    minLength={4} />
            </div>
            <div className="signup-buttons">
                <button className="button" onClick={() => { sign() }}>Register</button>
                <button className="button">Register and Play</button>
                <Link to="/" className="button button-home">
                    Back to Home
                </Link>
            </div>
            <div className="signup-respons">
                {response && <p>{response}</p>}
            </div>

        </div>
        </>
    )
}
