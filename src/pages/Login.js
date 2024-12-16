import React, { useState } from "react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import apiInstance from "../config/Api/apinstance";
import Swal from "sweetalert2"; // Import SweetAlert2

const Login = () => {
    const [model, setModel] = useState();
    const navigate = useNavigate();

    const handle = () => {
        console.log(model);
        apiInstance.post("/auth/login", model)
            .then((res) => {
                console.log(res);
                Swal.fire("Success", "Login successful!", "success"); // Success alert
                navigate("/home");
            })
            .catch((err) => {
                console.log(err);
                Swal.fire("Error", "Failed to login. Please try again.", "error"); // Error alert
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-primary to-accent flex items-center justify-center">
            <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <div className="space-y-4">
                    <Input
                        placeholder="Email"
                        className="py-2 px-4 rounded"
                        onChange={(e) => setModel({ ...model, email: e.target.value })}
                    />
                    <Input.Password
                        placeholder="Password"
                        className="py-2 px-4 rounded"
                        onChange={(e) => setModel({ ...model, password: e.target.value })}
                    />
                    <button
                        type="primary"
                        className="w-full bg-primary h-8 rounded text-white hover:bg-accent"
                        onClick={handle}
                    >
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
