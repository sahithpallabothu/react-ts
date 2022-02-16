import React from "react";
import ToDo from "./ToDo";
import classes from './Todos.module.css';
import { useContext } from 'react';
import { ToDosContext } from '../store/todos-context';

const ToDos:React.FC=() => {
    
    const ctx = useContext(ToDosContext);

    return (
        <ul className={classes.todos}>
            {ctx.items.map((item) => (
                <ToDo key={item.id} todoItem={item} onTodoItemClick={ctx.removeTodos.bind(null,item.id)}/>
            ))}
        </ul>
    )
}

export default ToDos;