import React, { useEffect, useState, useRef } from "react";
import styles from "./index.module.css";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from "dayjs";

/*
<LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          key={"first-" + valueFirstCalendar.month()}
          disablePast
          disableHighlightToday
          referenceDate={valueFirstCalendar}
          value={getValue()}
          onChange={(newValue) => setFirstCalendarDate(newValue)}
          views={["day"]}
        />
        <DateCalendar
          key={"second-" + valueSecondCalendar.month()}
          disablePast
          disableHighlightToday
          referenceDate={valueSecondCalendar}
          onChange={(newValue) => {
            setValueSecondCalendar(newValue);
            identifySelected(newValue);
          }}
          views={["day"]}
        />
      </LocalizationProvider>
*/

function DatePicker() {
  const [valueFirstCalendar, setValueFirstCalendar] = useState(
    dayjs("2024-01-01")
  );
  const [valueSecondCalendar, setValueSecondCalendar] = useState(
    dayjs("2024-02-01")
  );

  const [firstCalendarDate, setFirstCalendarDate] = useState(null);

  const [monthChange, setMonthChange] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    const elem = ref.current;
    if (elem == null) return;
    elem.children[0].children[0].style.display = "none";
  }, []);

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

  const identifySelected = (e) => {
    console.log(e);
  };

  const getValue = () => {
    if (!firstCalendarDate) return null;
    const sy = firstCalendarDate.year();
    const sm = firstCalendarDate.month();

    const ay = valueFirstCalendar.year();
    const am = valueFirstCalendar.month();

    if (sy == ay && sm == am) return firstCalendarDate;
    return null;
  };

  return (
    <div className={styles.calendarContainer}>
      <div style={{ cursor: "pointer" }}>
        <NavigateBeforeIcon onClick={() => backMonth()} />
      </div>

      <div ref={ref}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangeCalendar />
        </LocalizationProvider>
      </div>

      <div style={{ cursor: "pointer" }}>
        <NavigateNextIcon onClick={() => nextMonth()} />
      </div>
    </div>
  );
}

export { DatePicker };
