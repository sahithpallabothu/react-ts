import React,{useState} from "react";
import Todos from '../models/Todos';


type TodosContextObj = {
    items : Todos[],
    addTodos:(text:string) => void,
    removeTodos:(id:string) => void
};

export const ToDosContext = React.createContext<TodosContextObj>({
    items:[],
    addTodos:(text:string)=>{},
    removeTodos:(id:string)=>{}
})

const TodosContextProvider :React.FC = (props) =>{
    const [todoslist,settodolist] = useState<Todos[]>([]);

    const addTodoHandler = (enteredText:string) =>{
      const newTodo = new Todos(Math.random().toString(),enteredText);
      settodolist((prevTodos)=>{
        return [
          newTodo,
          ...prevTodos
        ]
      })
    }
    
    const removeTodoHandler = (id:string) =>{
        settodolist((prevTodos) => {
          return prevTodos.filter(x=>x.id!==id)
        })
    }

    const contextValue:TodosContextObj = {
        items:todoslist,
        addTodos : addTodoHandler,
        removeTodos:removeTodoHandler
    }
return (
    <ToDosContext.Provider value={contextValue}>
        {props.children}
    </ToDosContext.Provider>
)
}

export default TodosContextProvider;