import { createSlice } from "@reduxjs/toolkit";


const initialState={
    taskList:[],
    selectedTask:{}
}
const taskSlice=createSlice({
    name:'taskSlice',
    initialState,
    reducers:{
        
    }

})