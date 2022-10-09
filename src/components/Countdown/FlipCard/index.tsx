interface Props {
  value: number;
}

export const FlipCard = ({ value }: Props) => {
  const formattedValue = value.toString().padStart(2, '0');
  return (
    <div className="countdown__flipcard">
      <div className="countdown__flipcard--top">
        <span>{formattedValue}</span>
      </div>
      <div className="countdown__flipcard--topBack">
        <span>{formattedValue}</span>
      </div>
      <div className="countdown__flipcard--bottom">
        <span>{formattedValue}</span>
      </div>
      <div className="countdown__flipcard--bottomBack">
        <span>{formattedValue}</span>
      </div>
    </div>
  );
};
