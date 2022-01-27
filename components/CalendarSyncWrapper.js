import { useEffect, useState } from "react";

export const CalendarSyncWrapper = ({ options }) => {
  const [element, setElement] = useState(null);

  useEffect(() => {
    const initCronofy = async () => {
      const CronofyElements = await import("cronofy-elements")
      setElement(CronofyElements.CalendarSync(options));
    }

    if (!element) {
      initCronofy()
    }
  }, []);

  useEffect(() => {
    if (element) {
      element.update(options);
    }
  }, [options]);

  return <div id={options.target_id} />;
};