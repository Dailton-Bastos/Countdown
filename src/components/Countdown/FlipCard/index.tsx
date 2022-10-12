import React from 'react';

import { FlipCardStatic } from '../FlipCardStatic';
import { FlipCardAnimated } from '../FlipCardAnimated';

interface Props {
  digit: number;
  shuffle: boolean;
  unit: 'Dias' | 'Horas' | 'Minutos' | 'Segundos';
}

export const FlipCard = ({ digit, shuffle, unit }: Props) => {
  const [fakeLoading, setFakeLoading] = React.useState(true);

  let previousDigit = digit + 1;
  const currentDigit = digit.toString().padStart(2, '0');

  if (unit !== 'Horas') {
    previousDigit = previousDigit === 60 ? 59 : previousDigit;
  } else {
    previousDigit = previousDigit === 24 ? 23 : previousDigit;
  }

  const digit1 = (shuffle ? previousDigit : currentDigit).toString().padStart(2, '0');
  const digit2 = (!shuffle ? previousDigit : currentDigit).toString().padStart(2, '0');

  const currentDigitFormatted = currentDigit.toString().padStart(2, '0');
  const previousDigitFormatted = previousDigit.toString().padStart(2, '0');

  const animation1 = shuffle ? 'fold' : 'unfold';
  const animation2 = !shuffle ? 'fold' : 'unfold';

  React.useEffect(() => {
    setInterval(() => {
      setFakeLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flipCard">
      <div className={`flipCardWrapper ${fakeLoading ? 'skeleton' : ''}`}>
        <div className={`flipCardContent ${fakeLoading ? 'skeleton' : ''}`}>
          <FlipCardStatic position="upperCard" digit={currentDigitFormatted} />
          <FlipCardStatic position="lowerCard" digit={previousDigitFormatted} />

          <FlipCardAnimated digit={digit1} animation={animation1} />
          <FlipCardAnimated digit={digit2} animation={animation2} />
        </div>
      </div>

      <span className="flipCardUnit">{unit}</span>
    </div>
  );
};
