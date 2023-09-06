import React from 'react';
import {FilterTodoType} from "../../reducers/todoReducer";

export type TodoCardPropsType={
    title:string
    filter:FilterTodoType
}

export const TodoCard = (props:TodoCardPropsType) => {

    return (
        <div>
            <h3>Name: {props.title}</h3>

        </div>
    );
};

