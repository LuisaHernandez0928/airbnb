import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import dayjs from "dayjs";

function DatePicker() {
  const [valueFirstCalendar, setValueFirstCalendar] = useState(null);
  const [valueSecondCalendar, setValueSecondCalendar] = useState(null);
  const [monthChange, setMonthChange] = useState(1);

  useEffect(() => {
    setValueFirstCalendar(dayjs("2024-" + monthChange + "-01"));
    setValueSecondCalendar(dayjs("2024-" + (monthChange + 1) + "-01"));
  }, [monthChange]);

  const backMonth = () => {
    setMonthChange(monthChange - 1);
  };

  const nextMonth = () => {
    setMonthChange(monthChange + 1);
  };

  return (
    <div className={styles.calendarContainer}>
      <NavigateBeforeIcon onClick={() => backMonth()} />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          disablePast
          disableHighlightToday
          referenceDate={dayjs("2024-01-01")}
          value={valueFirstCalendar}
          /*onChange={(newValue) => setValue(newValue)}*/
          views={["day"]}
        />
        <DateCalendar
          disablePast
          disableHighlightToday
          referenceDate={dayjs("2024-02-01")}
          value={valueSecondCalendar}
          /*onChange={(newValue) => setValue(newValue)}*/
          views={["day"]}
        />
      </LocalizationProvider>

      <NavigateNextIcon onClick={() => nextMonth()} />
    </div>
  );
}

export { DatePicker };
