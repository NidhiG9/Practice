import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useLayoutEffect } from "react";
import Slide from "./Component/slide";
import Navbarnxt from "./Component/Navbarnxt";
import Footer from "./Footer";
import Technology from "./Technology";
import Service from "./Service";
import Project from "./Project";
import Career from "./Career";
import Contact from "./Contact";
import Bdm from "./Bdm";
import Aboutus from "./About";
import ApplicationForm from "./ApplicationForm";
import Loginhr from "./Component/Login";
import Adddatabase from "./Component/database";

function ScrollToTop() {
  const location = useLocation();

 
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // This ensures there's no scroll effect
    });
  }, [location.pathname]);

  return null;
}



************************test*********************************

function PrivateRoute({ element }) {
  const isLoggedin = sessionStorage.getItem('username') && sessionStorage.getItem('password');

  if (!isLoggedin) {
    return <Navigate to="/" />;
  }

  return element;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop /> {/* This ensures scrolling to top on route change */}
        
          <Navbarnxt />
          <Routes>
            <Route path="/" element={<Slide />} />
            <Route path="/services" element={<Service />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/job" element={<Bdm />} />
            <Route path="/applicationform" element={<ApplicationForm />} />
            <Route path="/login" element={<Loginhr />} />
            <Route path="/loginhr" element={<PrivateRoute element={<Adddatabase />} />} />
          </Routes>
          <div style={{ width: "100.3%" }}>
            <Footer />
          </div>
    
      </Router>
    </>
  );
}

export default App;
