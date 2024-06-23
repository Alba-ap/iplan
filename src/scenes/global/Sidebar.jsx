import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ProfilePicturePicker from "../profile";
import SegmentRoundedIcon from "@mui/icons-material/SegmentRounded";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import Username from "./UserName";  // Import the Username component

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      className="mtfont"
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>
        <h4 className="mtfont">{title}</h4>
      </Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("");
  const [username, setUsername] = useState("کاربر آی پلن");  // Default username

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 15px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#f4bc1c !important",
        },
        "& .pro-menu-item.active": {
          color: "#fff !important",
          backgroundColor: "#6870fa !important",
          fontSize: "3rem",
          fontFamily: "Yekan",
          width: "264px",
          borderEndEndRadius:"2rem", // Adjust the width as needed
          transition: "width 0.3s ease", // Smooth transition for width change
        },
      }}
    >
      <ProSidebar className="mtfont" collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              color: colors.grey[100],
              textAlign: "center",
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" ml="15px">
                <Typography variant="h3" color={colors.grey[100]}>
                  <h2 style={{ marginRight: "5rem" }}>iPlan</h2>
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <ProfilePicturePicker />
              </Box>
              <Box textAlign="center">
                <h1
                  sx={{ m: "10px 0 0 0" }}
                  style={{
                    marginBottom: "1rem",
                    fontSize: "2rem",
                    color: "#6870fa",
                  }}
                >
                  {username}
                </h1>
                <h4 style={{ color: "#868cfb" }}>آی پلن توسعه فردی من</h4>
              </Box>
            </Box>
          )}

          <Box style={{ direction: "rtl", marginLeft: "6rem" }}>
            <Item
              style={{ marginLeft: "7rem" }}
              className="fontstyle"
              direction="rtl"
              title="خانه"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              direction="rtl"
              title="بودجه بندی من"
              to="/mybudget"
              icon={<WalletOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              direction="rtl"
              title="برنامه کاری من"
              to="/myworkplan"
              icon={<AssignmentRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="برنامه درسی من"
              fontFamily="Yekan"
              to="/mystudyplan"
              icon={<MenuBookRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              direction="rtl"
              title="لیست خرید من"
              to="/myshoping"
              icon={<LocalMallIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              direction="rtl"
              title="تقویم من"
              to="/mycalendar"
              icon={<DateRangeRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              direction="rtl"
              title="نمایش آب و هوا"
              to="/mychart"
              icon={<ThunderstormOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              direction="rtl"
              title="لیست کتابهای من"
              to="/mybooks"
              icon={<CollectionsBookmarkIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              direction="rtl"
              title="لیست فیلمهای من"
              to="/mymovies"
              icon={<MovieFilterIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              direction="rtl"
              title="لیست موسیقی های من "
              to="/mymusics"
              icon={<MusicNoteIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
      <Username setUsername={setUsername} />
    </Box>
  );
};

export default Sidebar;
