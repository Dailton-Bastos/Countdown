interface Props {
  position: string;
  digit: string;
}

export const FlipCardStatic = (props: Props) => {
  return (
    <div className={`flipCardStatic flipCardStatic--${props.position}`}>
      <span>{props.digit}</span>
    </div>
  );
};
