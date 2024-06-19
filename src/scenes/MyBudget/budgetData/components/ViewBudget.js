import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { tokens } from "../../../../theme";
import { useTheme } from "@mui/material";
const ViewBudget = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <div
        className="view-budget-total"
        style={{
          backgroundColor: colors.blueAccent,
          color: "#353864",
        }}
      >
        <h2 style={{ fontFamily: "Yekan" }}>
          بودجه اولیه من:
          <EditIcon type="button" onClick={props.handleEditClick} />
        </h2>
        <h2 style={{ fontFamily: "Yekan" }}> {props.budget} تومان</h2>
      </div>
    </>
  );
};

export default ViewBudget;
