import React from "react";
import { useContext } from "react";
import { TodosContext } from "../contexts/todos.context";

const AddTodo = () => {

    const { setTodos } = useContext(TodosContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = e.target.todo.value;
        setTodos((prev) => [...prev, { todo, completed: false }]);
        e.target.reset();
      };

    return (
        <>
            <h1>Add todo</h1>
            <form onSubmit={handleSubmit}>
            <input required placeholder="new todo" type="text" name="todo"/>
            <button type="submit">
             Submit
            </button>
            </form>
        </>
    )
}

export default AddTodo;