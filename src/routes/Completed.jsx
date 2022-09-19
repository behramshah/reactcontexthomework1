import React from "react";
import { useContext } from "react";
import { TodosContext } from "../contexts/todos.context";

const Complated = () => {
    const { todos, setTodos } = useContext(TodosContext);
  
    const emptyCompletedTodos = () => {
      const newTodos = todos.map((todo) => ({ ...todo, completed: false }));
      setTodos(newTodos);
    };
  
    return (
      <div>
        <div>
          {todos
            .filter((todo) => todo.completed)
            .map((todo, index) => (
              <div key={index}>
                <label htmlFor="todoCheckBox">{todo.todo}</label>
              </div>
            ))}
          {todos.filter((todo) => todo.completed).length > 0 && (
            <button
              onClick={emptyCompletedTodos}
            >
              EMPTY TODOS
            </button>
          )}
        </div>
      </div>
    );
  };

export default Complated;