import React from 'react';

import { FlipCard } from './FlipCard';

import { getRemainingTime } from '../../utils/getRemainingTime';

import './global.css';

interface Props {
  futureDate: string;
}

export const Countdown = ({ futureDate }: Props) => {
  const [remainingTime, setRemainingTime] = React.useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

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
    <div className="countdown">
      <div className="countdown__blockTime">
        <span className="countdown__blockTime--title">Days</span>
        <div className="countdown__blockTime--flipCard">
          <FlipCard value={remainingTime.days} />
        </div>
      </div>

      <div className="countdown__blockTime">
        <span className="countdown__blockTime--title">Hours</span>
        <div className="countdown__blockTime--flipCard">
          <FlipCard value={remainingTime.hours} />
        </div>
      </div>

      <div className="countdown__blockTime">
        <span className="countdown__blockTime--title">Minutes</span>
        <div className="countdown__blockTime--flipCard">
          <FlipCard value={remainingTime.minutes} />
        </div>
      </div>

      <div className="countdown__blockTime">
        <span className="countdown__blockTime--title">Seconds</span>
        <div className="countdown__blockTime--flipCard">
          <FlipCard value={remainingTime.seconds} />
        </div>
      </div>
    </div>
  );
};
