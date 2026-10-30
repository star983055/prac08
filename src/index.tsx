import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrototypeApp } from "./prototype/PrototypeApp";
import { StudyProvider } from "./prototype/study-state";
import { AuthGate, useIdentity } from "./prototype/AuthGate";

function SignedInApp() {
  const identity = useIdentity();
  return <StudyProvider key={identity.id} userId={identity.id}><PrototypeApp /></StudyProvider>;
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AuthGate><SignedInApp /></AuthGate>
  </StrictMode>,
);
