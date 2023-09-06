import {AppSelector} from "../store/store";
import {todolistDomainType} from "../reducers/todoReducer";
import {ItemTask, RequestTaskType} from "../types/tasksType";
import {initialState} from "../reducers/taskReducer";

export const todolistsSelector = ()=>{
    return AppSelector<todolistDomainType[]>((state) => state.todolist)
}
export const tasksSelector = ()=>{
    return AppSelector<initialState>((state) => state.tasks)
}