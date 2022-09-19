import { useContext } from "react";
import { TodosContext } from "../contexts/todos.context";

const HomePage = () => {

    const {todos, setTodos} = useContext(TodosContext)

    const handleStatusChange = (index) => {
        todos[index].completed = !todos[index].completed;
        setTodos([...todos]);
      };

    return (
        <>
            <h1>Homepage</h1>
            <ul>
                {
                 todos.map( (todo, index) => 
                 <li key={index}>
                    <label htmlFor="todoCheckBox">{todo.todo}</label>
                    <input
                    onChange={handleStatusChange.bind(null, index)}
                    type="checkbox"
                    checked={todo.completed}
                    name="todoCheckbox"
                    />
                 </li>)
                }
            </ul>
        </>
    )
}

export default HomePage;