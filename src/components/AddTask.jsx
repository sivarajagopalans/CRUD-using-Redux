import React from 'react'
import { useState } from 'react'
import { addTaskToList } from '../slices/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';


export const AddTask = () => {

    const dispatch = useDispatch();
    const {tasksList}=useSelector((state)=> state.tasks)

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        console.log({ title, description });
        dispatch(addTaskToList({ title, description }));
        setTitle('');
        setDescription('');
    }

    return (
        <>

            <h1 className='heading'>CRUD OPERATION</h1>
            <p className='tasks-count'>{`Currently ${tasksList.length} task(s) pending`}</p>
            <div className="form-group">
                <div className="task-name">
                    <label htmlFor="task name">Task Name</label>
                    <input type="text" placeholder='enter task name' value={title}
                        onChange={(e) => { setTitle(e.target.value) }} required />
                </div>
                <div className="task-desc">
                    <label htmlFor="task sesc">Task Description</label>
                    <input type="text" placeholder='enter task description' value={description}
                        onChange={(e) => { setDescription(e.target.value) }} required />
                </div>
                <button type='button' onClick={(e)=>addTask(e)}>Add</button>
            </div>

        </>
    )
}
