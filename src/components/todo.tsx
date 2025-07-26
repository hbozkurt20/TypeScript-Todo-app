import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaEdit, FaCheck } from "react-icons/fa";
import type { TodoType } from "../types/type";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../redux/todoSlice";
import { useState } from "react";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
  const [editable, setEditable] = useState(false);
  const [newtodo, setNewTodo] = useState(content);
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeTodo(id));
  };

  const updatedTodo = () => {
    if (newtodo.trim() === "") return;
    dispatch(updateTodo({ id, content: newtodo.trim() }));
    setEditable(false);
  };

  return (
    <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #ddd",
    padding: "12px 16px",
    maxWidth: 900,
    width: "100%",         // tüm genişliği kaplasın
    margin: "12px auto",
    borderRadius: 8,
    backgroundColor: "#fafafa",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    transition: "box-shadow 0.25s ease",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxSizing: "border-box", // padding dahil
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.1)";
  }}
>
  <div style={{ flex: 1, marginRight: 12 }}>
    {editable ? (
      <input
        type="text"
        value={newtodo}
        onChange={(e) => setNewTodo(e.target.value)}
        autoFocus
        onKeyDown={(e) => e.key === "Enter" && updatedTodo()}
        style={{
          width: "100%",
          padding: "10px 14px",
          fontSize: 16,
          borderRadius: 6,
          border: "1px solid #ccc",
          outline: "none",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          fontFamily: "inherit",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#3f51b5";
          e.currentTarget.style.boxShadow = "0 0 6px rgba(63,81,181,0.5)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#ccc";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
    ) : (
      <p
        style={{
          fontSize: 16,
          color: "#444",
          margin: 0,
          wordBreak: "break-word",
        }}
      >
        {content}
      </p>
    )}
  </div>

  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 16,
      justifyContent: "flex-end",
      minWidth: 100,
    }}
  >
    {editable ? (
      <FaCheck
        onClick={updatedTodo}
        style={{
          cursor: "pointer",
          color: "#4caf50",
          fontSize: 22,
          transition: "color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#388e3c")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#4caf50")}
        title="Kaydet"
      />
    ) : (
      <FaEdit
        onClick={() => setEditable(true)}
        style={{
          cursor: "pointer",
          color: "#3f51b5",
          fontSize: 22,
          transition: "color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#2c387e")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#3f51b5")}
        title="Düzenle"
      />
    )}
    <IoIosRemoveCircleOutline
      onClick={remove}
      style={{
        cursor: "pointer",
        color: "#f44336",
        fontSize: 24,
        transition: "color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#ba000d")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#f44336")}
      title="Sil"
    />
  </div>
</div>

  );
}

export default Todo;
