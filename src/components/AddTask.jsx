import React from 'react'
import { useState } from 'react'
import { addTaskToList } from '../slices/tasksSlice';
import { useDispatch } from 'react-redux';


export const AddTask = () => {

    const dispatch=useDispatch();

    const [task, setTask] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
  
    const addTask = (e) => {
      e.preventDefault();
      console.log({task,taskDesc});
      dispatch(addTaskToList({task,taskDesc}))
    }

    return (
        <>

           <h1 className='heading'>CRUD OPERATION</h1>
           <p className='tasks-count'>Currently 0 task(s) pending</p>
            <div className="form-group">
                <div className="task-name">
                    <label htmlFor="task name">Task Name</label>
                    <input type="text" placeholder='enter task name' value={task}
                        onChange={(e) => { setTask(e.target.value) }} required/>
                </div>
                <div className="task-desc">
                    <label htmlFor="task sesc">Task Description</label>
                    <input type="text" placeholder='enter task description' value={taskDesc}
                        onChange={(e) => { setTaskDesc(e.target.value) }} required />
                </div>
                <button type='button' onClick={addTask}>Add</button>
            </div>

        </>
    )
}
