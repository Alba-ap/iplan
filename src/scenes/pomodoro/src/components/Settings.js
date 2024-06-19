import React from "react";
import "./Settings.css";

const Settings = ({
  breakLength,
  sessionLength,
  isStart,
  onDecreaseBreak,
  onIncreaseBreak,
  onDecreaseSession,
  onIncreaseSession,
}) => {
  const btnClassName = isStart ? "disable" : "";

  return (
    <div className="settings">
      <div className="settings-section">
        <label id="break-label">زمان استراحت</label>
        <div>
          <button
            className={btnClassName}
            id="break-decrement"
            onClick={onDecreaseBreak}
            style={{ color: "#fff", backgroundColor: "#6870fa" }}
          >
            -
          </button>
          <span id="break-length">{breakLength}</span>
          <button
            className={btnClassName}
            id="break-increment"
            onClick={onIncreaseBreak}
            style={{ color: "#fff", backgroundColor: "#6870fa" }}
          >
            +{" "}
          </button>
        </div>
      </div>
      <div className="settings-section">
        <label id="session-label">ایجاد بازه زمانی</label>
        <div>
          <button
            className={btnClassName}
            id="session-decrement"
            onClick={onDecreaseSession}
            style={{ color: "#fff", backgroundColor: "#6870fa" }}
          >
            -
          </button>
          <span id="session-length">{sessionLength}</span>
          <button
            className={btnClassName}
            id="session-increment"
            onClick={onIncreaseSession}
            style={{ color: "#fff", backgroundColor: "#6870fa" }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
