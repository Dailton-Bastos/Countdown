const getRemainingTime = (futureDate: string) => {
  const actualDate = new Date();
  const timeStampFuture = timeStampDiff(futureDate);
  const timeStampActual = timeStampDiff(String(actualDate));

  if (timeStampFuture > timeStampActual) {
    return getRemainingTotal(futureDate);
  }

  return {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  };
};

const actualDate = () => {
  return new Date();
};

const futureDate = (futureDate: string) => {
  return new Date(futureDate);
};

const timeStampDiff = (date: string) => {
  return futureDate(date).getTime() - actualDate().getTime();
};

const getDays = (date: string) => {
  return Math.floor(timeStampDiff(date) / (24 * 60 * 60 * 1000));
};

const getHours = (date: string) => {
  return Math.floor(timeStampDiff(date) / (60 * 60 * 1000));
};

const getMinutes = (date: string) => {
  return Math.floor(timeStampDiff(date) / (60 * 1000));
};

const getSeconds = (date: string) => {
  return Math.floor(timeStampDiff(date) / 1000);
};

const getRemainingTotal = (date: string) => {
  const days = getDays(date);
  const hours = getHours(date) % 24;
  const minutes = getMinutes(date) % 60;
  const seconds = getSeconds(date) % 60;

  // return {
  //   days: String(days),
  //   hours: padWithZeros(hours, 2),
  //   minutes: padWithZeros(minutes, 2),
  //   seconds: padWithZeros(seconds, 2),
  // };
  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

// const padWithZeros = (number: number, minLength: number) => {
//   const numberString = number.toString();

//   if (numberString.length >= minLength) return numberString;

//   return '0'.repeat(minLength - numberString.length) + numberString;
// };

export { getRemainingTime };
