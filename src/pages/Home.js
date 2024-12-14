import React, { useState } from "react";
import { Input, List } from "antd";

const Home = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (task.trim()) {
            setTodos([...todos, { id: Date.now(), text: task }]);
            setTask("");
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-primary to-accent flex flex-col items-center justify-center">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Todo App</h2>
                <div className="flex space-x-4 mb-4">
                    <Input
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Enter a task"
                        className="py-2 px-4 rounded w-full"
                    />
                    <button
                        type="primary"
                        className="bg-primary w-20 rounded text-white hover:bg-accent"
                        onClick={addTodo}
                    >
                        Add
                    </button>
                </div>
                <List
                    bordered
                    dataSource={todos}
                    renderItem={(item) => (
                        <List.Item
                            className="flex justify-between items-center"
                            key={item.id}
                        >
                            <span>{item.text}</span>
                            <button
                                type="link"
                                className="text-red-700 text-[14px]"
                                onClick={() => deleteTodo(item.id)}
                            >
                                Delete
                            </button>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
};

export default Home;
