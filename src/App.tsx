import './App.css'
import TodoCreate from './components/todoCreate'
import TodoList from './components/todoList'

function App() {
  return (
    <div
      style={{
        maxWidth: 800,
        width: "90%",
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      <TodoCreate />
      <TodoList />
    </div>
  );
}

export default App;
