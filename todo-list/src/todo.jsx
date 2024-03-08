import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInput(e) { 
        setNewTask(e.target.value);
    }
    function addTask() {
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function removeTask(index) {
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTask(updateTasks);
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return (<div className='todo-list'>
        <h2>To-do-List</h2>
        <div><input type="text" placeholder='Enter any Task..' value={newTask} onChange={handleInput} />
            <button className='add-btn'onClick={addTask}>Add Task</button>
        </div>
        <ol>
            {tasks.map((tasks, index) => (<li key={index+1}>
                <span className="text">{tasks}</span>
                <button className='delete-Btn' onClick={()=>removeTask(index) } >Delete</button>
                <button className='up-Btn' onClick={()=>moveTaskUp(index)} >☝️</button>
                <button className='down-Btn' onClick={()=>moveTaskDown(index)} >👇</button>
            </li>
            ))}
        </ol>
        </div>
    );
}
export default TodoList;