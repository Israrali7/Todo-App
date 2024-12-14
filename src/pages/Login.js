import React, { useState } from "react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Password from "antd/es/input/Password";

const Login = () => {
    const [model, setModel] = useState();
    const navigate = useNavigate()
        const handle = () => {
            console.log(model);
            navigate("/home")
        }
    return (
        <div className="min-h-screen bg-gradient-to-r from-primary to-accent flex items-center justify-center">
            <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <div className="space-y-4">
                    <Input placeholder="Email" className="py-2 px-4 rounded" onChange={(e) => setModel({ ...model, name: e.target.value })} />
                    <Input.Password placeholder="Password" className="py-2 px-4 rounded" onChange={(e) => setModel({ ...model, Password: e.target.value })} />
                    <button type="primary" className="w-full bg-primary h-8 rounded text-white hover:bg-accent" onClick={handle}>
                        Login
                    </button>
                </div>
                <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-accent font-semibold">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
