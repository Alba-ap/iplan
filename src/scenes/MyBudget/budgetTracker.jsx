import React from "react";
import { AppProvider } from "./budgetData/context/AppContext";
import Budget from "./budgetData/components/Budget";
import ExpenseTotal from "./budgetData/components/ExpenseTotal";
import ExpenseList from "./budgetData/components/ExpenseList";
import AddExpenseForm from "./budgetData/components/AddExpenseForm";
import RemainingBudget from "./budgetData/components/Remaining";

const BudgetTracker = () => {
  return (
    <AppProvider>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "3rem",
          marginBottom: "2rem",
        }}
      >
        <div style={{ marginRight: "1rem" }}>
          <Budget />
        </div>
        <div style={{ marginRight: "1rem" }}>
          <RemainingBudget />
        </div>
        <div style={{ marginRight: "1rem" }}>
          <ExpenseTotal />
        </div>
      </div>
      <ExpenseList />

      <h2 className="mt-3" style={{ marginRight: "2rem", marginTop: "5rem" }}>
        افزودن خرج کرد
      </h2>

      <AddExpenseForm />
    </AppProvider>
  );
};

export default BudgetTracker;
