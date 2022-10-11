interface Props {
  animation: string;
  digit: string;
}

export const FlipCardAnimated = (props: Props) => {
  return (
    <div className={`flipCardAnimated flipCardAnimated--${props.animation}`}>
      <span>{props.digit}</span>
    </div>
  );
};
