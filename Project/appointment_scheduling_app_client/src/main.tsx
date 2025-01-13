import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PatientApp from "./PatientApp.tsx";
import ReceptionistApp from "./ReceptionistApp.tsx";
import { useState } from "react";
import { NavProvider } from "./context/NavContext.tsx";
const App = () => {
  const [userRole, setUserRole] = useState("patient");

  return (
    <StrictMode>
      {userRole === "patient" ? (
        <NavProvider>
          <PatientApp />
        </NavProvider>
      ) : (
        <ReceptionistApp />
      )}
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
