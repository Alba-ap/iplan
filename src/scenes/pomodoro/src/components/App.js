import React, { useState, useEffect, useRef } from "react";
import FolkMe from "./Folkme";
import Settings from "./Settings";
import Times from "./Times";
import Controller from "./Controller";
import "./App.css";

const App = ({
  defaultBreakLength = "5",
  defaultSessionLength = "25",
  githubURL,
}) => {
  const audioBeep = useRef(null);

  const [breakLength, setBreakLength] = useState(
    Number.parseInt(defaultBreakLength, 10)
  );
  const [sessionLength, setSessionLength] = useState(
    Number.parseInt(defaultSessionLength, 10)
  );
  const [timeLabel, setTimeLabel] = useState("i Plan");
  const [timeLeftInSecond, setTimeLeftInSecond] = useState(
    Number.parseInt(defaultSessionLength, 10) * 60
  );
  const [isStart, setIsStart] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(() => {
    if (timeLeftInSecond < 0) {
      if (timeLabel === "i Plan") {
        setTimeLabel("Break");
        setTimeLeftInSecond(breakLength * 60);
      } else {
        setTimeLabel("i Plan");
        setTimeLeftInSecond(sessionLength * 60);
      }
      audioBeep.current.play();
    }
  }, [timeLeftInSecond, timeLabel, breakLength, sessionLength]);

  const onIncreaseBreak = () => {
    if (breakLength < 60 && !isStart) {
      setBreakLength(breakLength + 1);
    }
  };

  const onDecreaseBreak = () => {
    if (breakLength > 1 && !isStart) {
      setBreakLength(breakLength - 1);
    }
  };

  const onIncreaseSession = () => {
    if (sessionLength < 60 && !isStart) {
      const newSessionLength = sessionLength + 1;
      setSessionLength(newSessionLength);
      setTimeLeftInSecond(newSessionLength * 60);
    }
  };

  const onDecreaseSession = () => {
    if (sessionLength > 1 && !isStart) {
      const newSessionLength = sessionLength - 1;
      setSessionLength(newSessionLength);
      setTimeLeftInSecond(newSessionLength * 60);
    }
  };

  const onReset = () => {
    setBreakLength(Number.parseInt(defaultBreakLength, 10));
    setSessionLength(Number.parseInt(defaultSessionLength, 10));
    setTimeLabel("i Plan");
    setTimeLeftInSecond(Number.parseInt(defaultSessionLength, 10) * 60);
    setIsStart(false);
    if (timerInterval) clearInterval(timerInterval);
    setTimerInterval(null);
    audioBeep.current.pause();
    audioBeep.current.currentTime = 0;
  };

  const onStartStop = () => {
    if (!isStart) {
      setIsStart(true);
      setTimerInterval(
        setInterval(() => {
          setTimeLeftInSecond(
            (prevTimeLeftInSecond) => prevTimeLeftInSecond - 1
          );
        }, 1000)
      );
    } else {
      setIsStart(false);
      if (timerInterval) clearInterval(timerInterval);
      setTimerInterval(null);
    }
  };

  return (
    <div className="clock-theme">
    <div className="pomodoro-clock">
      <Settings
        breakLength={breakLength}
        sessionLength={sessionLength}
        isStart={isStart}
        onDecreaseBreak={onDecreaseBreak}
        onDecreaseSession={onDecreaseSession}
        onIncreaseBreak={onIncreaseBreak}
        onIncreaseSession={onIncreaseSession}
      />
      <Times timeLabel={timeLabel} timeLeftInSecond={timeLeftInSecond} />
      <Controller
        onReset={onReset}
        onStartStop={onStartStop}
        isStart={isStart}
      />

      <FolkMe
        color="#4c4d4e"
        backgroundColor="#fff"
        position="right"
        size="120px"
      />
    </div>
    </div>
  );
};

export default App;
