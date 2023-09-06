import {AnyAction, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {todolistReducer} from "../reducers/todoReducer";
import {taskReducer} from "../reducers/taskReducer";


export type configureStoreType = ReturnType<typeof store.getState>

export const store = configureStore({
    reducer:{
        todolist:todolistReducer,
        tasks:taskReducer,
    }
})



export type AppDispatchType = ThunkDispatch<configureStoreType, unknown, AnyAction>;
export const useAppDispatch = useDispatch<AppDispatchType>;
export const AppSelector: TypedUseSelectorHook<configureStoreType> = useSelector;