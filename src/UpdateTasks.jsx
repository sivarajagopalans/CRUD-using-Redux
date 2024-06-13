import React, { useState } from 'react'
import "./UpdateTask.css"

export const UpdateTasks = ({close}) => {
    const [task, setTask] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        console.log(task, ",", taskDesc);
    }
    return (
        <div className='full-screen-popup'>
            <div className="update-form-group">
                <div className="close-btn">
                    <button onClick={()=>close(false)}>&times;</button>
                </div>
                <h2>Update Task</h2>
                <div className="task-name">
                    <label htmlFor="task name">Task Name</label>
                    <input type="text" placeholder='enter task name' value={task}
                        onChange={(e) => { setTask(e.target.value) }} required />
                </div>
                <div className="task-desc">
                    <label htmlFor="task sesc">Task Description</label>
                    <input type="text" placeholder='enter task description' value={taskDesc}
                        onChange={(e) => { setTaskDesc(e.target.value) }} required />

                </div>
                <div className='update-btn'>
                    <button type='button' className='' onClick={()=>{<div className='popout'>{close(false)}</div>}}>update task</button>
                </div>
            </div>
            
        </div>
    )
}
