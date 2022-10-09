interface Props {
  position: string;
  digit: string;
}

export const StaticCard = (props: Props) => {
  return (
    <div className={props.position}>
      <span>{props.digit}</span>
    </div>
  );
};
