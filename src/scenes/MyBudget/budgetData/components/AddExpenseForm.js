import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
const AddExpenseForm = (props) => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            direction: "rtl",
          }}
        >
          <label
            htmlFor="name"
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          >
            عنوان
          </label>
          <TextField
            style={{
              fontFamily: "Yekan",
              width: "50rem",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
            label="عنوان هزینه"
            required="required"
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <label
            htmlFor="cost"
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          >
            قیمت
          </label>
          <TextField
            style={{
              width: "20rem",
              marginBottom: "1rem",
              marginTop: "1rem",
              fontFamily: "Yekan",
              marginRight: "1rem",
            }}
            required="required"
            type="number"
            class="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
          <Button
            type="submit"
            style={{
              backgroundColor: "#868cfb",
              borderRadius: "5rem",
              height: "3rem",
              width: "10rem",
            }}
            variant="contained"
          >
            <h3 className="mtfont">افزودن</h3>
            <AddBoxIcon style={{ marginRight: "0.5rem", color: "#fff" }} />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
