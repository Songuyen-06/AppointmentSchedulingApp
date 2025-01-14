import React from "react";
import { useContext } from "react";
import { SpecialtyList } from "./SpecialtyList";
import { Home } from "./Home";
import { DoctorList } from "./DoctorList";
import { ServiceList } from "./ServiceList";
import { BlogList } from "./BlogList";
import { AppointmentBooking } from "./AppointmentBooking";
import { NavContext } from "../../context/NavContext";

const Body = () => {
  const navContext = useContext(NavContext);
  const nav = navContext ? navContext.nav : "Home";
  return (
    <>
      {nav === "Home" ? (
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
      )}
    </>
  );
};
export default Body;
