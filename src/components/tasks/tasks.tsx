import React, { useEffect } from 'react';
import {FilterTodoType} from "../../reducers/todoReducer";
import {useAppDispatch} from "../../store/store";
import {tasksSelector} from "../../utils/selectors";
import {TaskCard} from "../taskCard/taskCard";
import {tasksThunk} from "../../reducers/taskReducer";

export type TassksPropsType = {
    filter: FilterTodoType
    todolistId: string
}
export const Tasks = (props: TassksPropsType) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        tasksThunk.getTask(props.todolistId)
    }, []);

    const tasks = tasksSelector()[props.todolistId]


    return (
        <div>
            {tasks.map((el) => {
                return (
                    <TaskCard
                        title={el.title}

                    />
                )
            })}
        </div>
    );
};

