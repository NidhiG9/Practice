import React, { useState} from 'react';
import { Link} from 'react-router-dom';
import './Navbarnxt.css';

function Navbarnxt() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
      {/* <div className="container-fluid"> */}
        <Link  to="/" className="navbar-brand">
          <img className='ms-3' src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/skilancerlogo1.png" alt="Skilancer Solar" height={50} width={75} />
        </Link>
        <div className="borderleft ms-2"></div>
        <button className="navbar-toggler" type="button" onClick={toggleCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto text-center mainMenu">
            <li className="nav-item">
              <Link  onClick={toggleCollapse} className="nav-link active fs-6 fw-bold" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link onClick={toggleCollapse} className="nav-link active fs-6 fw-bold" to="/technology">TECHNOLOGY</Link>
            </li>
            <li className="nav-item">
              <Link  onClick={toggleCollapse} className="nav-link active fs-6 fw-bold" to="/services">SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link onClick={toggleCollapse}  className="nav-link active fs-6 fw-bold" to="/projects">PROJECTS</Link>
            </li>
            <li className="nav-item">
              <Link onClick={toggleCollapse} className="nav-link active fs-6 fw-bold" to="/career">CAREERS</Link>
            </li>
            <li className="nav-item">
              <Link onClick={toggleCollapse} className="nav-link active fs-6 fw-bold" to="/contactus">CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link onClick={toggleCollapse} className="nav-link active fs-6 fw-bold" to="/aboutus">ABOUT US</Link>
            </li>
          </ul>
          <div className="borderright me-3"></div>
          <div className="d-flex align-items-center me-3">
            <a href="https://www.youtube.com/@skilancersolar3326" target="_blank" rel="noopener noreferrer" className="nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width={34} height={34} viewBox="0 0 24 24" style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msfilter: "" }}>
                <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/skilancersolar/" target="_blank" rel="noopener noreferrer" className="nav-icon ms-3 me-3">
              <svg xmlns="http://www.w3.org/2000/svg" width={34} height={34} viewBox="0 0 24 24" style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msfilter: "" }}>
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
              </svg>
            </a>
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbarnxt;
