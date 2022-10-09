interface Props {
  animation: string;
  digit: string;
}

export const AnimatedCard = (props: Props) => {
  return (
    <div className={`flipCard ${props.animation}`}>
      <span>{props.digit}</span>
    </div>
  );
};
