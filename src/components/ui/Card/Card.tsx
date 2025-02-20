import "./Card.css";

export interface CardProps {
  backgroundColor?: string;
  label: string;
}

export const Card = ({ backgroundColor, label }: CardProps) => {
  return (
    <div className="" style={{ backgroundColor }}>
      <h2 className="text-2xl font-bold underline">{label}</h2>
    </div>
  );
};
