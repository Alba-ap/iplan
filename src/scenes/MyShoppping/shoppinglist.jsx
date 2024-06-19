// src/components/Todo.js
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Input } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { TextField } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SaveAsSharpIcon from "@mui/icons-material/SaveAsSharp";
const ShoppingList = ({ todo, index, toggleDone, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(index, newText);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div style={{ display: "flex" }}>
          <TextField
            variant="filled"
            type="text"
            label="ویرایش"
            name="my todo"
            sx={{
              marginTop: "2rem",
              borderRadius: "18px",
              gridColumn: "span 10",
              width: "50rem",
              fontFamily: "Yekan",
              fontSize: "2rem",
            }}
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <SaveAsSharpIcon
            style={{ marginRight: "2.5rem" }}
            sx={{
              marginTop: "2.5rem",
              backgroundColor: "transparent",
              color: "#6870fa",
              fontSize: "2rem",
              marginRight: "1rem",
            }}
            onClick={handleEdit}
          />
        </div>
      ) : (
        <div
          style={{
            width: "50rem",

            boxShadow: "0 4px 8px rgba(104, 112, 250, 0.5)", // Shadow with color #6870fa
            borderRadius: "18px",
            borderWidth: "5px",
            marginTop: "2rem",
            padding: "1rem",
          }}
        >
          <div className="checkbox-container">
            <LocalOfferIcon />
            <span
              className="todo-text"
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                fontFamily: "Yekan",
                fontSize: "1.2rem",
              }}
            >
              {todo.text}
            </span>
            <div className="todo-icons">
              <Input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleDone(index)}
              />
              <ModeEditIcon
                sx={{
                  backgroundColor: "transparent",
                  color: "#6870fa",
                  fontSize: "1.75rem",
                  fontWeight: "bold",
                  mr: "10px",
                }}
                onClick={() => setIsEditing(true)}
              />

              <DeleteIcon
                sx={{
                  backgroundColor: "transparent",
                  color: "#6870fa",
                  fontSize: "1.75rem",
                  fontWeight: "bold",
                  mr: "10px",
                }}
                onClick={() => deleteTodo(index)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingList;
