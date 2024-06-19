import React from "react";
import "./Controller.css";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
const Controller = ({ onStartStop, onReset, isStart }) => {
  return (
    <div className="controller">
      <button
        style={{
          color: "#fff",
          backgroundColor: "#6870fa",
        }}
        id="start_stop"
        onClick={onStartStop}
      >
        {isStart ? "Stop" : "Start"}
      </button>
      <button
        id="reset"
        onClick={onReset}
        style={{ color: "#fff", backgroundColor: "#6870fa" }}
      >
        <RotateLeftIcon />
      </button>
    </div>
  );
};

export default Controller;
