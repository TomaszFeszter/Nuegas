//TODO refactor geting weekdays

export function getWeekDaysNames(localeName = "pl-PL", weekday = "long") {
  const format = new Intl.DateTimeFormat(localeName, { weekday }).format;
  return [...Array(7).keys()].map((day) =>
    format(new Date(Date.UTC(2021, 5, day - 1)))
  );
}

export const weekDays = {
  "pl-PL": getWeekDaysNames("pl-PL"),
  "es-MX": getWeekDaysNames("es-MX"),
  "en-us": getWeekDaysNames("en-us"),
};
