import {  useContext, useRef, useState } from "react";
import { Link } from "react-router";
import { loginTS } from "../api/authApi";
import { UserContext } from "../AppRoutes";







export default function Login() {
    const UserC = useContext(UserContext)

    const userRef = useRef<{ name: string; password: string; role: string; id: number; token: string }>({
        name: "",
        password: "",
        role: "user",
        id: 0,
        token: ""
    });
    const [message, setMessage] = useState("");
    let response;

    async function login() {
        response = await loginTS(userRef.current.name, userRef.current.password, userRef.current.role);
        UserC.name = userRef.current.name;
        console.log(response);

        if (response.status === 200) {
            console.log("Login successful!");
            console.log(response.data.name, response.data.token, response.data.playerId)
            UserC.id = response.data.playerId;
            UserC.token = response.data.token;
            setMessage("Login successful!");
            // return response.json();
        } else if (response.status === 401) {
            console.log("Invalid credentials");
            setMessage("Invalid credentials");
            return null;
        } else {
            console.log("Login failed:",);
            setMessage("Login failed");
            return null;
        }
    }


    return (
        <>
            <div className="login-page">
                <div className="fild">
                    <strong>name: </strong>
                    <input
                        type="text"
                        defaultValue={userRef.current.name}
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
                        defaultValue={userRef.current.password}
                        onChange={(e) => (userRef.current.password = e.target.value)}
                        placeholder="enter your password: "
                        required
                        minLength={4}
                    />
                </div>

                <div className="login-buttons">
                    <button className="button" onClick={() => login()}>Login</button>
                    <button className="button" onClick={() => { login(); /* future redirect to game */ }}>
                        Login and Play
                    </button>
                    <Link to="/" className="button-home button">
                        Back to Home
                    </Link>
                </div>

                <div className="login-message">
                    {message && <p>{message}</p>}
                </div>
            </div>
        </>
    );
}