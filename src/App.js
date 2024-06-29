import { useState } from "react";
import { MusicPlayerProvider } from "./scenes/My Musics/MusicPlayerContext";

import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import MyBudget from "./scenes/MyBudget";
import MyTracker from "./scenes/My Tracker";
import Form from "./scenes/form";
import Pomodoro from "./scenes/pomodoro/pomodoro";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import MyWorkPlan from "./scenes/MyWorkList";
import MyMusic from "./scenes/My Musics/index";
import MyMovies from "./scenes/MyMovies/Mymovies";
import Mybooks from "./scenes/MyBooks";
import MyShopping from "./scenes/MyShoppping/index";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/mybudget" element={<MyBudget />} />
              <Route path="/myworkplan" element={<MyWorkPlan />} />
              <Route path="/mytodolist" element={<Form />} />
              <Route path="/mychart" element={<MyTracker />} />
              <Route path="/mycalendar" element={<Calendar />} />
              <Route path="/mypomodoro" element={<Pomodoro />} />
              <Route
                path="/mymusics"
                element={
                  <MusicPlayerProvider>
                    <MyMusic />{" "}
                  </MusicPlayerProvider>
                }
              />
              <Route path="/mybooks" element={<Mybooks />} />
              <Route path="/mymovies" element={<MyMovies />} />
              <Route path="/myshoping" element={<MyShopping />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
