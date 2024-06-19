import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import moment from "jalali-moment";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  Modal,
  TextField,
  Button,
} from "@mui/material";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    allDay: false,
  });
  const [selectedInfo, setSelectedInfo] = useState(null);

  const handleOpen = (selected) => {
    setNewEvent({
      ...newEvent,
      start: selected.startStr,
      end: selected.endStr,
      allDay: selected.allDay,
    });
    setSelectedInfo(selected);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if (selectedInfo) {
      const calendarApi = selectedInfo.view.calendar;
      calendarApi.unselect();

      if (newEvent.title) {
        calendarApi.addEvent({
          id: `${newEvent.start}-${newEvent.title}`,
          title: newEvent.title,
          start: newEvent.start,
          end: newEvent.end,
          allDay: newEvent.allDay,
        });
      }
      setOpen(false);
    }
  };

  const handleDateClick = (selected) => {
    handleOpen(selected);
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `آیا مطمئنی که میخوای این برنامه رو حذف کنی؟ '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  const formatJalaliDate = (date) => {
    return moment(date).locale("fa").format("YYYY/MM/DD");
  };

  const renderEventContent = (eventInfo) => {
    return (
      <Box>
        <Typography variant="body2">{eventInfo.event.title}</Typography>
        <Typography variant="caption">
          {formatJalaliDate(eventInfo.event.start)}
        </Typography>
      </Box>
    );
  };

  return (
    <div className="mtfont">
      <Box m="20px">
        <h1 className="mtfont" style={{ fontSize: "2.5rem" }}>
          تقویم من
        </h1>
        <h3 className="mtfont" style={{ color: "#6870fa" }}>
          تقویم آی پلن برای ثبت دقیق برنامه ها
        </h3>

        <Box display="flex" justifyContent="space-between">
          <Box
            flex="1 1 20%"
            backgroundColor={colors.primary[400]}
            p="15px"
            borderRadius="4px"
          >
            <h2 className="mt-font">برنامه ها</h2>
            <List>
              {currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    fontFamily: "Yekan",
                    backgroundColor: "#868cfb",
                    margin: "10px 0",
                    color: "#fff",
                    fontStyle: "bold",
                    textAlign: "center",
                    borderRadius: "8px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>{formatJalaliDate(event.start)}</Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* CALENDAR */}
          <Box flex="1 1 100%" ml="15px">
            <FullCalendar
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              buttonText={{
                today: "امروز",
                month: "ماه",
                week: "هفته",
                day: "روز",
                listMonth: "لیست کل برنامه های من",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              // initialEvents={[
              //   {
              //     id: "12315",
              //     title: "جلسه آنلاین شرکت",
              //     date: "2022-09-14",
              //   },
              //   {
              //     id: "5123",
              //     title: "کلاس توسعه نرم افزار",
              //     date: "2022-09-28",
              //   },
              // ]}
              eventContent={renderEventContent} // Custom rendering for event content
              datesSet={(arg) => {
                const start = moment(arg.start).locale("fa");
                const end = moment(arg.end).locale("fa");
                const titleElement =
                  document.querySelector(".fc-toolbar-title");
                if (titleElement) {
                  titleElement.textContent = `${start.format(
                    "MMMM"
                  )} ${start.format("YYYY")} - ${end.format(
                    "MMMM"
                  )} ${end.format("YYYY")}`;
                }
              }}
              locale="fa"
              firstDay={6}
              dayHeaderContent={(args) => {
                const daysOfWeek = [
                  "یکشنبه",
                  "دوشنبه",
                  "سه‌شنبه",
                  "چهارشنبه",
                  "پنج‌شنبه",
                  "جمعه",
                  "شنبه",
                ];
                return daysOfWeek[args.date.getDay()];
              }}
            />
          </Box>
        </Box>

        {/* Modal for adding event */}
        <Modal dir="rtl" open={open} onClose={handleClose}>
          <Box
            display="flex"
            flexDirection="column"
            p="20px"
            bgcolor="background.paper"
            borderRadius="4px"
            boxShadow={24}
            width="400px"
            margin="auto"
            mt="20vh"
          >
            <h3 className="mtfont" mb="10px">
              افرودن برنامه جدید
            </h3>
            <TextField
              label="عنوان"
              fullWidth
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              margin="normal"
            />
            <Box display="flex" justifyContent="flex-end" mt="20px">
              <Button
                className="mtfont"
                onClick={handleClose}
                style={{ backgroundColor: "#cbcefb" }}
                color="secondary"
                variant="contained"
                sx={{ mr: 2 }}
              >
                لغو
              </Button>
              <Button
                className="mtfont"
                onClick={handleSave}
                style={{ backgroundColor: "#6870fa", marginRight: "1rem" }}
                color="primary"
                variant="contained"
              >
                ذخیره
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </div>
  );
};

export default Calendar;
