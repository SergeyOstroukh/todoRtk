import React from 'react';

export type TaskCardPropsType={
    title:string
}
export const TaskCard = (props:TaskCardPropsType) => {


    return (
        <div>
            {<h3>{props.title}</h3>}
            <button>delete</button>
        </div>
    );
};

