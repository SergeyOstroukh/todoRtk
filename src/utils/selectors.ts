import {AppSelector} from "../store/store";
import {todolistDomainType} from "../reducers/todoReducer";

export const todolistsSelector = ()=>{
    return AppSelector<todolistDomainType[]>((state) => state.todolist)
}