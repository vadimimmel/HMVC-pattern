import React, { useState } from 'react';
import classes from './TaskModule.module.css';

export const TaskModule = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleAddTask = () => {
        if (taskInput.trim()) {
            setTasks([...tasks, taskInput]);
            setTaskInput('');
        }
    };

    const handleInputChange = (e) => {
        setTaskInput(e.target.value);
    };

    return (
        <div>
            <h2>Tasks</h2>
            <input 
                type="text" 
                value={taskInput} 
                onChange={handleInputChange} 
                placeholder="Enter a new task"
				className={classes.input}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};
