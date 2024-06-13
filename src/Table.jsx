import React, { useState } from 'react'
import { UpdateTasks } from './UpdateTasks';

export const Table = () => {
    const [updateTaskBtn,setUpdateTaskBtn]=useState(false);
    const updateTask=()=>{
        setUpdateTaskBtn(true);
    }
    const deleteTask=()=>{
        console.log("deleteTask");
    }
  return (
    <div className='Table'>
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Desciption</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Write code</td> 
                    <td className='action-btn'>
                        <button onClick={()=>{updateTask()}}>🖌</button> 
                        <button onClick={()=>{deleteTask()}}>🗑</button></td>
                </tr>
            </tbody>
        </table>
        {updateTaskBtn &&  <div className='box-transform'>
                <UpdateTasks close={setUpdateTaskBtn}/>
            </div>}
    </div>
  )
}