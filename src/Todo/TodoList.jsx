import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
  removeTodo,
  toggleTodo
} from "../redux/app/action";
import { getTodos } from "./api";

function TodoItem({ title, status, onDelete, id, onToggle }) {
  return (
    <div style={{ display: "flex", padding: "1rem", gap: "2rem" }}>
      <div>{title}</div>
      <div>{`${status}`}</div>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onToggle(id)}>Toggle Status</button>
    </div>
  );
}

function TodoList() {
  const { todos, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );

  const { msg } = useSelector((state) => state.msg);
  const dispatch = useDispatch();

  const { count } = useSelector((state) => state.count);
  // console.log(count)

  useEffect(() => {
    // getTodos(dispatch);
    dispatch(getTodos());
  }, []);

  const handleDelete = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };

  const handleToggle = (id) => {
    const action = toggleTodo(id);
    dispatch(action);
  };
  console.log(todos);
  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3> Something went wrong!</h3>}
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
      <h3>{msg}</h3>
      <h3>{count}</h3>
    </div>
  );
}

export default TodoList;
