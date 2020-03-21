export function formatDateTime(time, date) {
  return new Date(`${time} ${date}`).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
