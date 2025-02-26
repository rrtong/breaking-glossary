import GlossaryEntry from "./GlossaryEntry";
import "../styles/Glossary.css";

const Glossary = () => {
  return (
    <div className="glossary">
      <h1> Breakdance Terminology </h1>
      <p>"It's only wrong if you think it's wrong." </p>
      <p>-Mekwunye Gideon Chiwinke II</p>

      <input placeholder="Search (doesn't work yet)" />
      <h2>top rock</h2>
      <GlossaryEntry title={"side step"} description={"step to the side lol"} />
      <GlossaryEntry title={"cross step"} description={"step to the across"} />
      <GlossaryEntry title={"indian step"} description={"text"} />
      <GlossaryEntry title={"10 step"} description={"text"} />
      <GlossaryEntry title={"buckshot"} description={"text"} />
      <GlossaryEntry title={"peter pan"} description={"text"} />

      <h2>go downs</h2>

      <GlossaryEntry
        title={"knee squat?"}
        description={"the thing where you jump up and drop to your knees"}
      />
      <GlossaryEntry
        title={"knee scissor?"}
        description={"the thing where you sweep and scissor your legs"}
      />
      <GlossaryEntry title={"knee drop"} description={"text"} />
      <GlossaryEntry title={"roll"} description={"is this even breakdancing"} />

      <h2>down rock</h2>
      <GlossaryEntry title={"hook"} description={"text"} />
      <GlossaryEntry title={"6 step"} description={"text"} />
      <GlossaryEntry title={"russian kick"} description={"text"} />
      <GlossaryEntry title={"CC"} description={"text"} />
      <GlossaryEntry title={"banana CC"} description={"text"} />
      <GlossaryEntry title={"zulu CC"} description={"Zulu Kingz"} />
      <GlossaryEntry title={"shoe-through"} description={"text"} />
      <GlossaryEntry title={"kettle pot"} description={"text"} />
      <GlossaryEntry title={"fish tail"} description={"text"} />

      <h2>back rocks</h2>

      <GlossaryEntry title={"back swipe"} description={"text"} />
      <GlossaryEntry title={"dolphin"} description={"text"} />

      <h2>power moves</h2>
      <GlossaryEntry title={"flare"} description={"text"} />
      <GlossaryEntry title={"swipe"} description={"text"} />

      <h2>freezes</h2>
      <GlossaryEntry title={"pilot freeze"} description={"text"} />
      <GlossaryEntry title={"shoulder freeze"} description={"text"} />
      <GlossaryEntry title={"elbow freeze"} description={"text"} />
      <GlossaryEntry title={"baby freeze"} description={"text"} />
    </div>
  );
};

export default Glossary;
