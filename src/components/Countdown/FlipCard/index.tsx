interface Props {
  value: string;
}

export const FlipCard = ({ value }: Props) => {
  return (
    <div className="countdown__flipcard">
      <div className="countdown__flipcard--top">
        <span>{value}</span>
      </div>
      <div className="countdown__flipcard--topBack">
        <span>{value}</span>
      </div>
      <div className="countdown__flipcard--bottom">
        <span>{value}</span>
      </div>
      <div className="countdown__flipcard--bottomBack">
        <span>{value}</span>
      </div>
    </div>
  );
};
