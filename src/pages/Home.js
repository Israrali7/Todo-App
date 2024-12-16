import React, { useState, useEffect } from "react";
import apiInstance from "../config/Api/apinstance"; // your axios instance
import Swal from "sweetalert2"; // Import SweetAlert2
import { Input } from "antd";

const Home = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    // Fetch todos when the component mounts
    useEffect(() => {
        fetchTodos();
    }, []);

    // Fetch all todos from the API
    const fetchTodos = async () => {
        try {
            const response = await apiInstance.get("/todo");
            console.log(response.data); // Log to inspect response structure
            setTodos(response.data.data); // Use data directly since it's an array
        } catch (error) {
            Swal.fire("Error", "Failed to fetch todos", "error"); // SweetAlert2 error
            console.error(error);
        }
    };

    // Add a new todo via the API
    const addTodo = async () => {
        if (!task.trim()) {
            Swal.fire("Warning", "Task cannot be empty!", "warning"); // SweetAlert2 warning
            return;
        }
        try {
            const response = await apiInstance.post("/todo", { input: task });
            setTodos([...todos, response.data.data]); // Add new todo to the existing list
            setTask("");
            Swal.fire("Success", "Todo added successfully!", "success"); // SweetAlert2 success
        } catch (error) {
            Swal.fire("Error", "Failed to add todo", "error"); // SweetAlert2 error
            console.error(error);
        }
    };

    // Delete a todo via the API
    const deleteTodo = async (id) => {
        try {
            await apiInstance.delete(`/todo/${id}`);
            setTodos(todos.filter((todo) => todo._id !== id)); // Remove todo from list after deletion
            Swal.fire("Success", "Todo deleted successfully!", "success"); // SweetAlert2 success
        } catch (error) {
            Swal.fire("Error", "Failed to delete todo", "error"); // SweetAlert2 error
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-primary to-accent flex flex-col items-center justify-center">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Todo App</h2>
                <div className="flex space-x-4 mb-4">
                    <Input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Enter a task"
                        className="py-2 px-4 rounded w-full border"
                    />
                    <button
                        type="button"
                        className="bg-primary w-20 rounded text-white hover:bg-accent"
                        onClick={addTodo}
                    >
                        Add
                    </button>
                </div>
                <ul className="list-none p-0">
                    {todos.map((item) => (
                        <li key={item._id} className="flex justify-between items-center py-2 border-b">
                            <span>{item.input}</span>
                            <button
                                type="button"
                                className="text-red-700 text-[14px] hover:text-red-900"
                                onClick={() => deleteTodo(item._id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
