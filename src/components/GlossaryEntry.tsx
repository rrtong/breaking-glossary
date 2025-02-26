import "../styles/GlossaryEntry.css";

const GlossaryEntry = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="glossary-entry">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default GlossaryEntry;
