import React, { useState} from "react";
import styles from "./index.module.css";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';


function DatePicker() {
  //const [value, setValue] = useState(dayjs('2024-02-01'))
  return (
    <div className={styles.calendarContainer}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar disablePast disableHighlightToday  views={['day']} />
        <DateCalendar disablePast disableHighlightToday referenceDate={dayjs('2024-02-01')} /*onChange={(newValue) => setValue(newValue)}*/  views={['day']} />
      </LocalizationProvider>
    </div>
  );
}

export { DatePicker };
