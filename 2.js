function countHours(year, holidays) {
  const extraWorkDays = holidays.filter((date) => {
    const day = new Date(`${year}/${date}`).getDay();
    return day !== 0 && day !== 6;
  }).length;
  return extraWorkDays * 2;
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // format MM/DD
const extraHours = countHours(year, holidays);
console.log(extraHours);
