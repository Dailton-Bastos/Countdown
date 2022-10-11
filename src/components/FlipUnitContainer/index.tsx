import { StaticCard } from '../StaticCard';
import { FlipCardAnimated } from '../Countdown/FlipCardAnimated';

import './styles.css';

interface Props {
  digit: number;
  shuffle: boolean;
  unit: 'Dias' | 'Horas' | 'Minutos' | 'Segundos';
}

export const FlipUnitContainer = ({ digit, shuffle, unit }: Props) => {
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

  return (
    <div className="flipClockCard">
      <div className="flipClock__Card">
        <div className="flipUnitContainer">
          <StaticCard position="upperCard" digit={currentDigitFormatted} />
          <StaticCard position="lowerCard" digit={previousDigitFormatted} />

          <FlipCardAnimated digit={digit1} animation={animation1} />
          <FlipCardAnimated digit={digit2} animation={animation2} />
        </div>
      </div>

      <span className="flipClockCard__title">{unit}</span>
    </div>
  );
};
