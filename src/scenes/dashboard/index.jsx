import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import TodoList from "../list/todolist";
import Pomodoro from "../pomodoro/pomodoro";
import React, { useState } from "react";
const Dashboard = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);

  return (
    <div style={{ fontFamily: "Yekan" }}>
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="داشبورد من" subtitle={"به داشبورد خودت خوش اومدی!"} />

          <Box>
            <Button
              sx={{
                backgroundColor: "#868cfb",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                color: "#fff",
                fontFamily: "Yekan",
                borderRadius:"2rem"
              }}
            >
              <DownloadOutlinedIcon sx={{ mr: "10px" }} />
              دانلود گزارش کلی من
            </Button>
          </Box>
        </Box>

        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderEndStartRadius:"3rem"}}

          >
            <StatBox
              title="انجام شده در برنامه لیست من"
              subtitle="12 کار انجام شده"
              progress="0.75"
              increase="+14%"
              icon={<EmailIcon sx={{ color: "#868cfb", fontSize: "30px" }} />}
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            color="#868cfb"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontFamily="Yekan"
            sx={{borderEndStartRadius:"3rem"}}

          >
            <StatBox
              sx={{ color: "#868cfb", fontSize: "40px" }}
              fontFamily="Yekan"
              subtitle="750,000 تومان"
              title="باقی مانده بودجه"
              progress="0.70"
              increase="+21%"
              icon={
                <PointOfSaleIcon sx={{ color: "#868cfb", fontSize: "30px" }} />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{borderEndStartRadius:"3rem"}}

          >
            <StatBox
              subtitle="5 کار انجام شده"
              title=" انجام شده در برنامه کاری من"
              progress="0.30"
              increase="+5%"
              icon={
                <PersonAddIcon sx={{ color: "#868cfb", fontSize: "30px" }} />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ color: "#868cfb",borderEndStartRadius:"3rem" }}

          >
            <StatBox
              subtitle="3 کار انجام شده"
              title="انجام شده در برنامه درسی من"
              progress="0.80"
              increase="+43%"
              icon={<TrafficIcon sx={{ color: "#868cfb", fontSize: "30px" }} />}
            />
          </Box>

          {/* ROW 2 */}
          <Box
            gridColumn="span 7"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            sx={{borderRadius:"1rem"}}

          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  نمودار عملکرد من{" "}
                </Typography>
                <Typography variant="h5" fontWeight="bold" color="#868cfb">
                  آنالیز نحوه عملکرد من تا کنون{" "}
                </Typography>
              </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
        
            <Box
              gridColumn="span 5"
              gridRow="span 3"
              backgroundColor={colors.primary[400]}
              padding="15px"
              sx={{borderRadius:"1rem"}}

            >
              <Pomodoro />
           
            </Box>
         
          {/* ROW 3 */}

          <Box
            gridColumn="span 7"
            gridRow="span 3"
            backgroundColor={colors.primary[400]}
            sx={{borderRadius:"1rem"}}

          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              نمودار میله ای آنالیز خرجکرد من{" "}
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            gridColumn="span 5"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            overflow="auto"
            sx={{borderRadius:"1rem"}}

          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography
                variant="h4"
                fontWeight="600"
                color={colors.grey[100]}
                style={{ marginTop: "1rem" }}
              >
                ایجاد لیست سریع
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="15px"
              style={{ marginRight: "3rem" }}
            >
              <TodoList />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
