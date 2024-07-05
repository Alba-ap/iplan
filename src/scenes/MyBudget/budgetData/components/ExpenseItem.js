import React, { useContext } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <div style={{ justifyContent: "center" }}>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "60rem",
          marginRight: "24.5rem",

          color: "black",
          backgroundColor: "#e5e4e2",
          boxShadow: "0 4px 8px rgba(104, 112, 250, 0.5)", // Shadow with color #6870fa
          borderRadius: "18px",
          borderWidth: "5px",
          marginTop: "2rem",
          padding: "1rem",
        }}
      >
        <div className="checkbox-container">
          <span
            className="todo-text"
            style={{
              fontFamily: "Yekan",
              fontSize: "1rem",
            }}
          >
            {props.name}
          </span>
          <div className="todo-icons">
            <span>{props.cost}</span>
            <HighlightOffIcon
              sx={{
                backgroundColor: "transparent",
                color: "#6870fa",
                fontSize: "1.75rem",
                fontWeight: "bold",
                mr: "10px",
              }}
              onClick={handleDeleteExpense}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
