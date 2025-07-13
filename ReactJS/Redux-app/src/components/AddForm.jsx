import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  let [task, setTask] = useState("");
 const dispatch = useDispatch();
  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log(task);
    dispatch(addTodo(task))
    
  };

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setTask(e.target.value)} />
        <button>submit</button>
      </form>
    </>
  );
}
