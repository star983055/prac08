import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrototypeApp } from "./prototype/PrototypeApp";
import { StudyProvider } from "./prototype/study-state";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <StudyProvider><PrototypeApp /></StudyProvider>
  </StrictMode>,
);
