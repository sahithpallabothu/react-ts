import React from "react";
import Todos from "../models/Todos";
import classes from "./TodoItem.module.css";

const ToDo: React.FC<{ todoItem: Todos,onTodoItemClick:()=>void }> = (props) => {
  return (
    <li
      className={classes.item}
      onClick={props.onTodoItemClick}
    >
      {props.todoItem.text}
    </li>
  );
};

export default ToDo;
