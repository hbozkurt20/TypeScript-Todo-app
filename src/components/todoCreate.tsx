import { useState } from "react";
import { useDispatch } from "react-redux";
import type { TodoType } from "../types/type";
import { createTodo } from "../redux/todoSlice";

const TodoCreate: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>("");

  const dispatch = useDispatch();

  const handleCreateTodo = () => {
    const trimmed = newTodo.trim();
    if (!trimmed) {
      alert("Lütfen bir todo giriniz.");
      return;
    }

    const payload: TodoType = {
      id: Date.now(),
      content: trimmed,
    };

    dispatch(createTodo(payload));
    setNewTodo("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleCreateTodo();
  };

  return (
    <form
  onSubmit={(e) => {
    e.preventDefault();
    handleCreateTodo();
  }}
  style={{
    maxWidth: 700,
    margin: "2rem auto",
    padding: "0 1rem",
    display: "flex",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
  }}
>
  <input
    type="text"
    placeholder="Yeni todo giriniz..."
    value={newTodo}
    onChange={(e) => setNewTodo(e.target.value)}
    onKeyDown={handleKeyDown}
    aria-label="Yeni todo giriniz"
    style={{
      flexGrow: 0,              // ÖNEMLİ: Bunu 0 yapıyoruz
      width: "60%",             // Belirgin genişlik veriyoruz
      minWidth: 250,
      padding: "14px 20px",
      fontSize: 18,
      borderRadius: 12,
      border: "2px solid #E0E0E0",
      boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      outline: "none",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#333",
    }}
    onFocus={(e) => {
      e.currentTarget.style.borderColor = "#4F46E5";
      e.currentTarget.style.boxShadow = "0 0 12px rgba(79, 70, 229, 0.5)";
    }}
    onBlur={(e) => {
      e.currentTarget.style.borderColor = "#E0E0E0";
      e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
    }}
  />
  <button
    type="submit"
    aria-label="Todo oluştur"
    style={{
      padding: "14px 32px",
      backgroundColor: "#4F46E5",
      color: "white",
      border: "none",
      borderRadius: 12,
      fontWeight: 700,
      fontSize: 18,
      cursor: "pointer",
      boxShadow: "0 6px 12px rgba(79, 70, 229, 0.4)",
      transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      userSelect: "none",
      minWidth: 130,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 0,            // Button da flex büyümesin
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#4338CA";
      e.currentTarget.style.boxShadow = "0 8px 16px rgba(67, 56, 202, 0.6)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "#4F46E5";
      e.currentTarget.style.boxShadow = "0 6px 12px rgba(79, 70, 229, 0.4)";
    }}
    onFocus={(e) => {
      e.currentTarget.style.boxShadow = "0 0 16px rgba(79, 70, 229, 0.7)";
      e.currentTarget.style.outline = "none";
    }}
    onBlur={(e) => {
      e.currentTarget.style.boxShadow = "0 6px 12px rgba(79, 70, 229, 0.4)";
    }}
  >
    Oluştur
  </button>
</form>

  );
};

export default TodoCreate;


//! Notes

//todo value = {newTodo}  onChange= {(e) => setNewTodo(e.target.value)}  ✅ İkisi Birlikte Nasıl Çalışıyor?
//* Bu bir döngü gibi çalışır ama sonsuz döngü olmaz, çünkü:

//* Kullanıcı input'a bir şey yazar.

//* onChange tetiklenir → setNewTodo çağrılır.
 
//* State değişince bileşen yeniden render edilir.

//* value={newTodo} sayesinde input’un değeri güncel state ile eşleşir.

//* Bu, React’te en doğru input yönetim şeklidir.

