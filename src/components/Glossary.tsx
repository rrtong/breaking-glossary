import { useState } from "react";
import GlossaryEntry from "./GlossaryEntry";
import { GLOSSARY_ENTRIES } from "../constants/Constants";
import "../styles/Glossary.css";

const Glossary = () => {
  const [filterInput, setFilterInput] = useState("");
  let categorySeen: { [key: string]: number } = {}; // keep track of how many of each category displayed on filter

  const filteredGlossary = GLOSSARY_ENTRIES.filter(
    (entry) =>
      entry.title.toLowerCase().includes(filterInput.toLowerCase()) ||
      entry.category.toLowerCase().includes(filterInput.toLowerCase())
  );

  return (
    <div className="glossary">
      <h1> Breakdance Terminology </h1>
      <p>"It's only wrong if you think it's wrong." </p>
      <p>-Mekwunye Gideon Chiwinke II</p>
      <input
        type="text"
        value={filterInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterInput(e.target.value)
        }
        placeholder="Filter"
      />
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {filteredGlossary.map((entry) => {
          if (entry.category in categorySeen) {
            categorySeen[entry.category] += 1;
          } else {
            categorySeen[entry.category] = 1;
          }
          return (
            <div>
              {categorySeen[entry.category] === 1 ? (
                <h2>{entry.category}</h2>
              ) : (
                <div></div>
              )}
              <GlossaryEntry
                title={entry.title}
                description={entry.description}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Glossary;
