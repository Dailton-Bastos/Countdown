import React from 'react';

import { FlipCard } from './FlipCard';

import { getRemainingTime } from '../../utils/getRemainingTime';

import './global.css';

interface Props {
  futureDate: string;
}

export const Countdown = ({ futureDate }: Props) => {
  const [remainingTimeDays, setRemainingTimeDays] = React.useState({
    days: 0,
    shuffle: true,
  });

  const [remainingTimeHours, setRemainingTimeHours] = React.useState({
    hours: 0,
    shuffle: true,
  });

  const [remainingTimeMinutes, setRemainingTimeMinutes] = React.useState({
    minutes: 0,
    shuffle: true,
  });

  const [remainingTimeSeconds, setRemainingTimeSeconds] = React.useState({
    seconds: 0,
    shuffle: true,
  });

  const updateRemainingTime = React.useCallback((futureDate: string) => {
    const { days, hours, minutes, seconds } = getRemainingTime(futureDate);

    setRemainingTimeDays((prev) => {
      if (days !== prev.days) {
        const shuffle = !prev.shuffle;

        return {
          days,
          shuffle,
        };
      }

      return { ...prev };
    });

    setRemainingTimeHours((prev) => {
      if (hours !== prev.hours) {
        const shuffle = !prev.shuffle;

        return {
          hours,
          shuffle,
        };
      }

      return { ...prev };
    });

    setRemainingTimeMinutes((prev) => {
      if (minutes !== prev.minutes) {
        const shuffle = !prev.shuffle;

        return {
          minutes,
          shuffle,
        };
      }

      return { ...prev };
    });

    setRemainingTimeSeconds((prev) => {
      if (seconds !== prev.seconds) {
        const shuffle = !prev.shuffle;

        return {
          seconds,
          shuffle,
        };
      }

      return { ...prev };
    });
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      return updateRemainingTime(futureDate);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [futureDate, updateRemainingTime]);

  return (
    <div className="countdown">
      <div className="countdownTitle">
        <h2>Faltam</h2>
      </div>

      <div className="countdownFlipCards">
        <FlipCard unit="Dias" digit={remainingTimeDays.days} shuffle={remainingTimeDays.shuffle} />
        <FlipCard unit="Horas" digit={remainingTimeHours.hours} shuffle={remainingTimeHours.shuffle} />
        <FlipCard unit="Minutos" digit={remainingTimeMinutes.minutes} shuffle={remainingTimeMinutes.shuffle} />
        <FlipCard unit="Segundos" digit={remainingTimeSeconds.seconds} shuffle={remainingTimeSeconds.shuffle} />
      </div>
    </div>
  );
};
