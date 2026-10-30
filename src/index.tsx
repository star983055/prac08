import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrototypeApp } from "./prototype/PrototypeApp";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PrototypeApp />
  </StrictMode>,
);
