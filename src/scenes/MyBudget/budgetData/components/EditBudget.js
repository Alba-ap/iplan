import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { TextField } from "@mui/material";
const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <div className="view-budget-total">
        <TextField
          style={{ justifyContent: "center", marginTop: "2rem" }}
          id="name"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <CheckCircleOutlineIcon
          style={{
            marginTop: "3rem",
            fontSize: "1.75rem",
            color: "green",
          }}
          type="button"
          onClick={() => props.handleSaveClick(value)}
        />
      </div>
    </>
  );
};

export default EditBudget;
