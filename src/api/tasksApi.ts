import axios, {AxiosResponse} from "axios";
import {RequestTaskType, ResponceTaskType} from "../types/tasksType";

const instance = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.1",
    withCredentials:true,
})

export const taskApi={
    getTasks(todolistId: string){
        return instance.get<null,AxiosResponse<RequestTaskType>,ResponceTaskType>(`/todo-lists/${todolistId}/tasks/`)
    }
}