import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Glossary from "./components/Glossary.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Glossary />
  </StrictMode>
);
