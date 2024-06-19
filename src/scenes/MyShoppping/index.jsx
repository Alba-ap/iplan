// src/components/TodoList.js
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ShoppingList from "./shoppinglist";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const MyShopping = () => {
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
    <>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginRight: "20rem",
        }}
      >
        <h1>
          لیست خرید من
          <LocalMallIcon style={{ fontSize: "2rem", marginRight: "38rem" }} />
        </h1>
        <TextField
          variant="filled"
          type="text"
          label="افزودن کالا"
          sx={{
            gridColumn: "span 10",
            width: "50rem",
            fontFamily: "Yekan",
            fontSize: "5rem",
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
          <div style={{ width: "50rem" }}>
            <ShoppingList
              key={index}
              index={index}
              todo={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleDone={toggleDone}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MyShopping;
