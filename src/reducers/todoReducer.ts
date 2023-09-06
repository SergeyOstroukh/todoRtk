import {createSlice} from "@reduxjs/toolkit";
import {todoApi} from "../api/todoApi";
import {todoResponseType} from "../types/todoTypes";
import {createAppAsyncThunk} from "../utils/create-app-thunk";

export type todolistDomainType = todoResponseType & { filter: FilterTodoType }
export type FilterTodoType = 'all' | 'active' | 'coompleted'


export const todoSlice = createSlice({
    name: 'todolistReducer',
    initialState: [] as todolistDomainType[],
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(setTodo.fulfilled, (state, action) => {
                return action.payload.todolists.map(el=> ({...el, filter:'all'}))
            })
            .addCase(addTodo.fulfilled,(state, action)=>{
                state.unshift({...action.payload.todolist, filter:'all'})
            })
    }

})

const setTodo = createAppAsyncThunk<{ todolists: todoResponseType[] }>('todolist/get', async (_, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        const res = await todoApi.getTodolists()
        const todolists = res.data
        return {todolists}
    } catch (e) {
        return rejectWithValue(null)
    }
})

const addTodo = createAppAsyncThunk<{todolist:todoResponseType},string >('todolist/add',async (title:string, thunkAPI)=>{
    const {dispatch,rejectWithValue} = thunkAPI
    try {
        const res = await todoApi.addTodo(title)
        if(res.data.resultCode===0){
            const todolist = res.data.data.item
            return {todolist}
        }else {
            return rejectWithValue(null)
        }
    }catch (e){
        return rejectWithValue(null)
    }
})

export const todolistReducer = todoSlice.reducer
export const todolistAction = todoSlice.actions
export const todolistThunk = {setTodo,addTodo}