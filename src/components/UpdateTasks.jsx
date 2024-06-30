import React, { useEffect, useState } from 'react'
import "./UpdateTask.css"
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskInList } from '../slices/tasksSlice';


export const UpdateTasks = ({ close }) => {
    const { selectedTask } = useSelector((state) => state.tasks);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState(0);

    const dispatch = useDispatch();


    const updateTaskBtn = () => {
        close(false);
        dispatch(updateTaskInList({ id, title, description }))
        console.log({ id, title, description });
    }

    useEffect(() => {
        if (Object.keys(selectedTask).length !== 0) {
            setTitle(selectedTask.title);
            setDescription(selectedTask.description);
            setId(selectedTask.id);
        }
    }, [selectedTask]);




    return (
        <div className='full-screen-popup'>
            <div className="update-form-group">
                <div className="close-btn">
                    <button onClick={() => close(false)}>&times;</button>
                </div>
                <h2>Update Task</h2>
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
                <div className='update-btn'>
                    <button type='button' className='' onClick={() => updateTaskBtn()}>update task</button>
                </div>
            </div>

        </div>
    )
}
