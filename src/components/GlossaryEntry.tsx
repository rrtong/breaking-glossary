import "../styles/GlossaryEntry.css";

const GlossaryEntry = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <li className="glossary-entry">
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default GlossaryEntry;
