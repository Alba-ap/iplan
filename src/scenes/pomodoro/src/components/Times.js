import React from "react";
import "./Times.css";

const Times = ({ timeLabel, timeLeftInSecond, sessionLength }) => {
  const minute = Math.floor(timeLeftInSecond / 60);
  const second = timeLeftInSecond % 60;

  const formattedMinute = minute < 10 ? "0" + minute : minute;
  const formattedSecond = second < 10 ? "0" + second : second;

  const percentage = (timeLeftInSecond / (sessionLength * 60)) * 100;
  const dashArray = `${(percentage / 100) * 283} 283`;

  return (
    <div className="times">
      <div className="times-content">
        <label id="timer-label">{timeLabel}</label>
        <span id="time-left">{`${formattedMinute}:${formattedSecond}`}</span>
        <div className="progress-circle">
          <svg viewBox="0 0 100 100">
            <circle className="bg" cx="50" cy="50" r="45" />
            <circle
              className="progress"
              cx="50"
              cy="50"
              r="45"
              style={{ strokeDasharray: dashArray }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Times;
