import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../app/actions";

const Todo = () => {
  const [input, setInput] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  const addTodoMethods = () => {
    dispatch(addTodo(input));
  };
  return (
    <>
      <div>
        <input type="text" onChange={(event) => setInput(event.target.value)} />
        <button onClick={addTodoMethods}>Add</button>
        <ol>
          {list.map((items) => {
            return (
              <li key={items.id}>
                {items.data}
                <button onClick={() => dispatch(deleteTodo(items.id))}>
                  Del
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default Todo;
