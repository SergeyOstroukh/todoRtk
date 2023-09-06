import React from 'react';
import {FilterTodoType} from "../../reducers/todoReducer";
import {Tasks} from "../tasks/tasks";

export type TodoCardPropsType={
    title:string
    filter:FilterTodoType
    todolistId:string
}

export const TodoCard = (props:TodoCardPropsType) => {

    return (
        <div>
            <h3>Name: {props.title}</h3>
                <Tasks
                    filter={props.filter}
                    todolistId={props.todolistId}
                />
        </div>
    );
};

