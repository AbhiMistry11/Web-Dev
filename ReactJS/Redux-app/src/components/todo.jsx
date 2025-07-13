import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo ,marksAsDone} from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  
  const handleMarkDone = (id) => {
    dispatch(marksAsDone(id));
  };
  return (
    <>
      <AddForm />
      <h3>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task} <button onClick={() => handleDelete(todo.id)}>delete</button> {!todo.isDone && (
              <button onClick={() => handleMarkDone(todo.id)}>Mark as Done</button>
            )} </li>
        ))}
      </ul>
    </>
  );
}
