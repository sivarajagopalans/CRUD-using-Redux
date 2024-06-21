import React from 'react'
import { useState } from 'react'


export const AddTask = () => {

    const [task, setTask] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
  
    const handleClick = (e) => {
      e.preventDefault();
      console.log(task,",", taskDesc);
    }

    return (
        <>

            <h1>CRUD OPERATION</h1>
            <div className="form-group">
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
                <button type='button' onClick={handleClick}>Add</button>
            </div>

        </>
    )
}
