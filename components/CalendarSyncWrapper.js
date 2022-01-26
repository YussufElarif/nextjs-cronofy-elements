import { useEffect, useState } from "react";
import * as CronofyElements from "cronofy-elements";

export const CalendarSyncWrapper = ({ options }) => {
    const [element, setElement] = useState(null);
  
    useEffect(() => {
      if (!element) {
        setElement(CronofyElements.CalendarSync(options));
      }
    }, []);
  
    useEffect(() => {
      if (element) {
        element.update(options);
      }
    }, [options]);
  
    return <div id="cronofy-calendar-sync" />;
  };
  