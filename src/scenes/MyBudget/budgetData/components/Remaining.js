import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { tokens } from "../../../../theme";
import { useTheme } from "@mui/material";
const RemainingBudget = () => {
  const { expenses, budget } = useContext(AppContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div
      className="view-budget-total"
      style={{
        backgroundColor: colors.blueAccent,
        color: "#353864",
      }}
    >
      <h2 style={{ fontFamily: "Yekan" }}>باقی مانده:</h2>
      <h2 style={{ fontFamily: "Yekan" }}> {budget - totalExpenses} تومان</h2>
    </div>
  );
};

export default RemainingBudget;
