import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Todo from "./todo";

const TodoList = ({ textfieldSize }) => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    if (inputText.trim() !== "") {
      setTodos([...todos, { text: inputText, done: false }]);
      setInputText("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <div style={{ alignItems: "center" }}>
      <TextField
        variant="filled"
        type="text"
        label="برنامه من"
        sx={{
          gridColumn: "span 10",
          width: textfieldSize ? `${textfieldSize}px` : "30rem", 
          fontFamily: "Yekan",
          fontSize: "2rem",
        }}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <Button
        sx={{
          marginBottom: "1rem",
          backgroundColor: "#6870fa",
          color: "#fff",
          fontSize: "18px",
          fontWeight: "bold",
          padding: "8px 30px",
          borderRadius: "100px",
          fontFamily: "Yekan",
          marginRight: "1rem",
        }}
        onClick={addTodo}
      >
        افرودن
        <AddCircleIcon style={{ marginRight: "0.5rem" }} />
      </Button>

      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
};

export default TodoList;
