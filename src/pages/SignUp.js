import React, { useState } from "react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import apiInstance from "../config/Api/apinstance";
import Swal from "sweetalert2"; // Import SweetAlert2

const SignUp = () => {
    const [model, setModel] = useState();
    const navigate = useNavigate();

    const handle = () => {
        console.log(model);
        apiInstance.post('/auth/signUp', model)
            .then((res) => {
                console.log(res);
                Swal.fire("Success", "Account created successfully!", "success"); // Success alert
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                Swal.fire("Error", "Failed to sign up. Please try again.", "error"); // Error alert
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-primary to-accent flex items-center justify-center">
            <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                <div className="space-y-4">
                    <Input
                        placeholder="Name"
                        className="py-2 px-4 rounded"
                        onChange={(e) => setModel({ ...model, name: e.target.value })}
                    />
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
                        Sign Up
                    </button>
                </div>
                <p className="text-center mt-4">
                    Already have an account?{" "}
                    <Link to="/" className="text-accent font-semibold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
