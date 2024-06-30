import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './slices/tasksSlice'



export const store =configureStore({
    // devTools:false,
    reducer:{
        tasks:taskReducer
    }
})