import React from 'react';
import {todolistsSelector} from "../../utils/selectors";
import {TodoCard} from "../todoCard/TodoCard";

export type TodolistsPropsType={

}

export const Todolists = () => {

    const todolist = todolistsSelector()


    return (
        <div>
            {todolist.map((td)=>{
                return (
                    <TodoCard
                        title={td.title}
                        filter={td.filter}
                    />
                )
            })}
        </div>
    );
};

