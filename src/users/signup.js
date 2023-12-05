import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: "" });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/project/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <h1>Signup</h1>
            {error && <div>{error}</div>}
            <input
                placeholder="username"
                className="form-control w-50"
                value={credentials.username}
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value })} />
            <input
                placeholder="password"
                type="password"
                className="form-control w-50"
                value={credentials.password}
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value })} />
            <button 
                onClick={signup} 
                className="btn btn-primary form-control w-50"> 
                Signup
            </button>
        </div>
    );
}
export default Signup;