export type birthdateInObject = {
  day: number, month: number, year: number
}

export default function ageCounter(birthdate: birthdateInObject): number {
  const { floor } = Math;
  const { day, month, year } = birthdate;
  const currentDate = new Date();
  const inputDate = new Date(year, month - 1, day);
  const timeDiff = currentDate.getTime() - inputDate.getTime();
  const yearDiff = floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

  return yearDiff;
}