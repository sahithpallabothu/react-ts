import React,{useRef} from "react";
import classes from './NewTodo.module.css';
import { ToDosContext } from "../store/todos-context";
import { useContext } from "react";

const NewTodo:React.FC = () =>{
    
    const ctx = useContext(ToDosContext);
    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event:React.FormEvent) =>
    {
        event.preventDefault();

        const enteredText = inputRef.current!.value;

        if(enteredText?.trim().length === 0) {
            //throw an error
            return;
        }

        ctx.addTodos(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="todoText">ToDO Text:</label>
            <input type="text" id="todoText" ref={inputRef}/>
            <button>Submit</button>
        </form>
    )
}

export default NewTodo;