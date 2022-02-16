import ToDos from './components/ToDos';
import './App.css';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';

function App() {

  // const DEFAULT_TODOS : Todos[] = [
  //   new Todos('1','Learn React'),
  //   new Todos('2','Learn Typescript'),
  // ];

  

  return (
    <TodosContextProvider>
      <NewTodo/>
      <ToDos />
    </TodosContextProvider>
  );
}

export default App;
