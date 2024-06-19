import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
import { TextField } from "@mui/material";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setfilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setfilteredExpenses(searchResults);
  };

  return (
    <>
      <div
        className="centalize"
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          style={{
            marginTop: "2rem",
            width: "60rem",
            marginRight: "21rem",
            fontFamily: "Yekan",
          }}
          fullWidth
          type="text"
          placeholder="جستجو کنید..."
          onChange={handleChange}
        />
        <ul class="list-group mt-3 mb-3">
          {filteredExpenses.map((expense) => (
            <ExpenseItem
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExpenseList;
