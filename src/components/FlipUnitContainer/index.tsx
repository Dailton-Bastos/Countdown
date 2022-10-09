import { StaticCard } from '../StaticCard';
import { AnimatedCard } from '../AnimatedCard';

import './styles.css';

interface Props {
  digit: number;
  shuffle: boolean;
  unit: 'days' | 'hours' | 'minutes' | 'seconds';
}

export const FlipUnitContainer = ({ digit, shuffle, unit }: Props) => {
  let previousDigit = digit + 1;
  const currentDigit = digit.toString().padStart(2, '0');

  if (unit !== 'hours') {
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
    <div className="flipUnitContainer">
      <StaticCard position="upperCard" digit={currentDigitFormatted} />
      <StaticCard position="lowerCard" digit={previousDigitFormatted} />

      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
    </div>
  );
};
