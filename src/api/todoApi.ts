import axios, {AxiosResponse} from "axios";
import {todoListRequest, todoListResponse} from "../types/todoTypes";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1",
    withCredentials: true,
})

export const todoApi = {
    getTodolists() {
        return instance.get('/todo-lists')
    },
    addTodo(title:string){
        return instance.post<null,AxiosResponse<todoListResponse>,todoListRequest>('/todo-lists',{title})
    }
}