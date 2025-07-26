import { useSelector } from "react-redux";
import Todo from "./todo";
import type { RootState } from "../redux/store";

function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo);

  return (
    <div
      style={{
        maxWidth: 900,
        width: "90vw",
        margin: "20px auto",
        padding: "0 1rem",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        minWidth: 320,
        boxSizing: "border-box",
      }}
    >
      {todos && todos.length > 0 ? (
        todos.map((todo) => <Todo key={todo.id} todoProps={todo} />)
      ) : (
        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontStyle: "italic",
            fontSize: 18,
            marginTop: 60,
            userSelect: "none",
          }}
        >
          Henüz eklenmiş todo yok.
        </p>
      )}
    </div>
  );
}

export default TodoList;
