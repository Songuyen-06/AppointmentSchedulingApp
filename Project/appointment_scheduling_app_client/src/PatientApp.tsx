import Header from "./components/patient/Header";
import Body from "./components/patient/Body";
import { Footer } from "./components/patient/Footer";
import { NavProvider } from "./context/NavContext";

const PatientApp = () => {
  return (
    <>
      <NavProvider>
        <Header />
        <Body />       
        <Footer />
      </NavProvider>
    </>
  );
};

export default PatientApp;
