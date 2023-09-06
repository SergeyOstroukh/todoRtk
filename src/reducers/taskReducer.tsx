import {createSlice} from "@reduxjs/toolkit";
import {ItemTask} from "../types/tasksType";
import {createAppAsyncThunk} from "../utils/create-app-thunk";
import {taskApi} from "../api/tasksApi";

export type initialState = {
    [key:string]:ItemTask[]
}

const TaskSlice = createSlice({
    name:'tasks',
    initialState:{} as initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getTask.fulfilled,(state, action)=>{})
    }
})


const getTask = createAppAsyncThunk<{tasks:ItemTask[]; todolistId:string},string>('tasks/getTasks',async (todolistId, thunkAPI)=>{
    const {dispatch,rejectWithValue} = thunkAPI

    try {
        const res = await taskApi.getTasks(todolistId)
        const tasks = res.data.items
        return {tasks,todolistId}

    }catch (e){
        return rejectWithValue(null)
    }
})

export const taskReducer = TaskSlice.reducer
const taskAction = TaskSlice.actions
export const tasksThunk = {getTask}