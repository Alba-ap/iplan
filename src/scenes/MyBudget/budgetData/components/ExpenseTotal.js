import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { tokens } from "../../../../theme";
import { useTheme } from "@mui/material";

const ExpenseTotal = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { expenses } = useContext(AppContext);
  const total = expenses.reduce((total, item) => {
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
      <h2 style={{ fontFamily: "Yekan" }}>خرج کرد تا کنون:</h2>
      <h2 style={{ fontFamily: "Yekan" }}> {total} تومان</h2>
    </div>
  );
};

export default ExpenseTotal;
