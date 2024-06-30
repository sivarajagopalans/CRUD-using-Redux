import React, { useState } from 'react'
import { UpdateTasks } from './UpdateTasks';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTask } from '../slices/tasksSlice';


export const TaskList = () => {

    const { tasksList } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const [updateTaskBtn, setUpdateTaskBtn] = useState(false);
    const updateTask = (task) => {
        setUpdateTaskBtn(true);
        dispatch(setSelectedTask(task));
    }
    const deleteTask = () => {
        console.log("deleteTask");
    }
    return (
        <div className='Table'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task</th>
                        <th>Desciption</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasksList && tasksList.map((task, index) => {
                            return (
                                <tr key={task.id}>
                                    <td>{index + 1}</td>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td className='action-btn'>
                                        <button onClick={() => { updateTask(task) }}>🖌</button>
                                        <button onClick={() => { deleteTask() }}>🗑</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {updateTaskBtn && <div className='box-transform'>
                <UpdateTasks close={setUpdateTaskBtn} />
            </div>}
        </div>
    )
}
