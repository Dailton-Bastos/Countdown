import React from 'react';

import { getRemainingTime } from '../../utils/getRemainingTime';

const defaultRemainingTime = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
};

interface Props {
  futureDate: string;
}

export const Countdown = ({ futureDate }: Props) => {
  const [remainingTime, setRemainingTime] = React.useState(defaultRemainingTime);

  const updateRemainingTime = React.useCallback((futureDate: string) => {
    setRemainingTime(getRemainingTime(futureDate));
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      return updateRemainingTime(futureDate);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [futureDate, updateRemainingTime]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      <strong>{remainingTime.days}</strong>
      <span>Days</span>
      <strong>{remainingTime.hours}</strong>
      <span>Hours</span>
      <strong>{remainingTime.minutes}</strong>
      <span>Minutes</span>
      <strong>{remainingTime.seconds}</strong>
      <span>Seconds</span>
    </div>
  );
};
