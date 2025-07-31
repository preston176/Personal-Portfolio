export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const currentYear = new Date().getFullYear();
export const currentDay = days[new Date().getUTCDay()];
