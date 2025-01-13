import Header from "./components/patient/Header";
import Body from "./components/patient/Body";
import { useContext } from "react";
import { SpecialtyList } from "./components/patient/SpecialtyList";
import { Home } from "./components/patient/Home";
import { DoctorList } from "./components/patient/DoctorList";
import { ServiceList } from "./components/patient/ServiceList";
import { BlogList } from "./components/patient/BlogList";
import { AppointmentBooking } from "./components/patient/AppointmentBooking";
import { Footer } from "./components/patient/Footer";
import { NavContext } from "./context/NavContext";

const PatientApp = () => {
  const navContext = useContext(NavContext);
  const nav = navContext ? navContext.nav : "Home";

  return (
    <>
      <Header />
      <Body
        content={
          nav === "Home" ? (
            <Home />
          ) : nav === "Specialties" ? (
            <SpecialtyList />
          ) : nav === "Doctors" ? (
            <DoctorList />
          ) : nav === "Services" ? (
            <ServiceList />
          ) : nav === "Blogs" ? (
            <BlogList />
          ) : (
            <AppointmentBooking />
          )
        }
      />
      <Footer />
    </>
  );
};

export default PatientApp;
