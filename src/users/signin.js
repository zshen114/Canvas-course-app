import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/project/account");
    };

    return (
        <div>
            <h1>Signin</h1>
            <input
                placeholder="username"
                className="form-control w-50"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
            />
            <input
                placeholder="password"
                type="password"
                className="form-control w-50"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
            <button
                className="btn btn-primary form-control w-50" 
                onClick={signin}>
                Signin
            </button>
        </div>
    );
}
export default Signin;