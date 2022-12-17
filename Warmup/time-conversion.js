const input = "12:45:54PM"; // 12:45:54

function timeConversion(s) {
  const period = s.match(/AM|PM/g)[0];
  const isAfterMidDay = period === "PM";
  const [hour, ...minutesAndSeconds] = s.replace(period, "").split(":");

  let formattedHour;

  if (hour === "12" && !isAfterMidDay) {
    formattedHour = "00";
  } else {
    formattedHour = isAfterMidDay ? Number(hour) + 12 : hour;
  }

  return [formattedHour, ...minutesAndSeconds].join(":");
}
console.log(timeConversion(input));
