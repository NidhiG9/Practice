import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import '../App.css'
function Slide() {


  const [activeCollapse, setActiveCollapse] = useState(null);

  const handleCollapseToggle = (collapseId) => {
    setActiveCollapse((prev) => (prev === collapseId ? null : collapseId));
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [value, setValue] = useState(1);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(1);

  useEffect(() => {
    const increaseValue = () => {
      if (value < 50) {
        setValue((prevValue) => prevValue + 1);
      }

      if (value1 < 95) {
        setValue1((prevValue) => prevValue + 1);
      }

      if (value2 < 18) {
        setValue2((prevValue) => prevValue + 1);
      }
      if (value3 < 75) {
        setValue3((prevValue) => prevValue + 1);
      }
    };

    const intervalId = setInterval(increaseValue, 100);

    return () => clearInterval(intervalId);
  }, [value, value1, value2, value3]);

  return (
    <>
      <video autoPlay loop muted
        style={{ width: "101%", height: "auto",backgroundSize:"cover" }}>
        <source src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/BgVideo.mp4" type="video/mp4" />
      </video>
      <br />
      <br />
      <div className="mainContainer ms-3" >
        
          
          <div className="text-container ">
          <br />
            <h1 id="aboutSkilancer">About Us</h1>
            <br />
            <p>
            
              <b> Skilancer Solar</b>
            </p>

            <p className="aboutpera">
              Skilancer Solar, one of India's fastest-growing providers of solar module cleaning systems (MCS), specializes in offering permanent professional cleaning services for solar panels at commercial parks and establishments. Our mission is to enhance the efficiency and longevity of solar panels through expert cleaning solutions.Founded by Neeraj Kumar and Manish Kumar Das, Skilancer Solar leverages their combined experience. Neeraj Kumar, an IIT Jodhpur alumnus, brings 10 years of experience in the solar industry, while Manish Kumar Das, an instrumentation engineer, has 17 years of industry experience. Their expertise has driven Skilancer Solar to the forefront of the solar cleaning industry. Our client portfolio includes renowned companies such as Hindustan Petroleum, Adani, Ambit Energy, and Unilink Group, underscoring our commitment to delivering top-tier cleaning services that meet the highest standards of quality and reliability.
              Skilancer Solar has focused on solar cleaning equipment, an area where Neeraj believed an opportunity existed, due to the issues of cleaning itself as well as wastage and maintenance.


              <br />
              <br />
            </p>
            <Link className="wave-button" to='/aboutus'>
                <span >Read More</span>
                          <div className="wave"></div>   
                      </Link>
          </div>
        </div>
            <br />
      <br /> <br />
      <br />
     {/* Robot Feature */ }
      <div className="feature pt-5 ms-3" id="feature">
        <h1 id="feature" style={{ textAlign: "center", color: 'Navy', fontWeight: '600' }}>
          Robot Feature
        </h1>
        <div className="Robot">
          <div className="row row-cols-lg-6 text-center justify-content-center">
            <div className="col ">
              <div className="p-2">
                <div className="feature1 " data-aos="zoom-in">
                  <img
                    src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/safe.png"
                    alt=""
                    style={{ height: 60, width: 60, paddingTop: 10 }}
                  />
                  <br />
                  <p className="featureOne">Safe &amp; Reliable</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-2 ">
                <div className="feature1 " data-aos="zoom-in">
                  <img
                    src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/internet.png"
                    alt=""
                    style={{ paddingTop: 0, height: 60, width: 60 }}
                  />
                  <br />
                  <p className="featureOne">Internet Connected</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-2">
                <div className="feature1" data-aos="zoom-in">
                  <img
                    src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/energy.png"
                    style={{ height: 70, width: 70 }}
                    alt=""
                  />
                  <p className="featureOne">
                    Energy Independent <br /> Operation
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-2 ">
                <div className="feature1" data-aos="zoom-in">
                  <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/water.png" alt="" />
                  <br />
                  <p className="featureOne">No Water Required</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-2">
                <div className="feature1" data-aos="zoom-in">
                  <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/cleaning.png" alt="" />
                  <br />
                  <p className="featureOne">
                    Daily Cleaning <br /> of PV Modules
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-2">
                <div className="feature1" data-aos="zoom-in">
                  <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/misalignment.png" alt="" />
                  <br />
                  <p className="featureOne">No misalignment  <br />issues</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className=" p-2">
                <div className="feature1 " data-aos="zoom-in">
                  <img
                    src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/autonomous.png"
                    alt=""
                    style={{ paddingTop: 0, height: 60, width: 60 }}
                  />
                  <br />
                  <p className="featureOne">
                    Autonomous &amp; Artificial <br /> Intelligence Enabled
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-2 ">
                <div className="feature1" data-aos="zoom-in">
                  <img
                    src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/directdrive.png"
                    alt=""
                    style={{ paddingTop: 0, height: 60, width: 60 }}
                  />
                  <br />
                  <p className="featureOne">
                    Only four direct <br /> drive
                    motors on the  <br />entire assembly
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-2">
                <div className="feature1" data-aos="zoom-in">
                  <img
                    src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/array.png"
                    style={{
                      height: 65,
                      width: 55,
                      paddingTop: 0,
                      paddingBottom: 15,
                    }}
                    alt=""
                  />
                  <br />
                  <p className="featureOne">
                    The system runs <br /> directly
                    on the array  <br />frame structure
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-2">
                <div className="feature1" data-aos="zoom-in">
                  <img
                    src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/tiltcleaning.png"
                    alt=""
                    style={{ height: 65, width: 55 }}
                  />
                  <br />
                  <p className="featureOne">
                    The tilt angle <br />
                    gives cleaning  <br />benefits
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="p-2">
                <div className="feature1" data-aos="zoom-in">
                  <img
                    src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/fewestcomponent.png"
                    alt=""
                    style={{ height: 65, width: 55 }}
                  />
                  <br />
                  <p className="featureOne">
                    Fewest possible <br />
                    moving components
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="row cardMain ">
        <div className="col-sm-3 card2 ">
          <div className="card shadow-lg p-3 mb-5 bg-body rounded">
            <div className="card-body ">
              <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/happy.png" alt="" />
              <h3 className="increasing_Numbers1">{value}+</h3>
              <h3 style={{ fontWeight: 600 }}>Happy Clients</h3>
            </div>
          </div>
        </div>
        <div className="col-sm-3 card2 ">
          <div className="card shadow-lg p-3 mb-5 bg-body rounded">
            <div className="card-body ">
              <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/project.png" alt="" />
              <h3 className="increasing_Numbers1">{value1}+</h3>
              <h3 style={{ fontWeight: 600 }}>Projects</h3>
            </div>
          </div>
        </div>

        <div className="col-sm-3 card2 ">
          <div className="card shadow-lg p-3 mb-5 bg-body rounded">
            <div className="card-body">
              <img
                src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/fuel.png"
                alt=""
                style={{ width: "45px", height: "40px" }}
              />
              <h3 className="increasing_Numbers2 ">{value2}+</h3>
              <h3 style={{ fontWeight: 600 }}>Million Litres Saved </h3>
            </div>
          </div>
        </div>

        <div className="col-sm-3 card2 ">
          <div className="card shadow-lg p-3 mb-5 bg-body rounded">
            <div className="card-body">
              <img
                src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/teamw.png"
                alt=""
                style={{ width: "60px", height: "60px" }}
              />
              <h3 className="increasing_Numbers3 ">{value3}+</h3>
              <h3 style={{ fontWeight: 600 }}>Team Members</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Our Technology */}
      <div
        className="row m-3 "
        style={{ textAlign: "center", color: "white" }}
        id="grad1"
      >
        <h2 style={{fontFamily:'Monotype Corsiva', fontSize:'38px'}}>Our Technology </h2>
        <p className="p-5">
          At Skilancer Solar, we are revolutionizing the solar energy industry
          with our state-of-the-art panel cleaning robots. Designed with
          cutting-edge technology and a deep understanding of the challenges
          faced by solar power plants, our robots ensure maximum efficiency and
          longevity of solar panels.
        </p>
        <div className="col-sm-6 p-3 ">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Advanced Cleaning Mechanism</h5>
              <p className="card-text ">
                Our robots utilize an advanced, waterless cleaning mechanism
                that effectively removes dust, dirt, and bird droppings from
                solar panels without causing any damage. This innovative
                approach ensures that your solar panels remain clean and
                functional without the need for water, which is a precious
                resource in many regions.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 p-3 ">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Intelligent Automation</h5>
              <p className="card-text">
                Equipped with AI and machine learning algorithms, our robots are
                capable of autonomous operation. They can schedule cleanings
                based on real-time data and weather conditions, ensuring optimal
                performance at all times. The robots navigate the entire solar
                array with precision, avoiding obstacles and adapting to
                different panel layouts.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 p-3 ">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Sustainable and Eco-Friendly</h5>
              <p className="card-text">
                We are committed to sustainability. Our cleaning robots operate
                without the use of chemicals or water, making them an
                eco-friendly solution that conserves natural resources and
                reduces environmental impact. The energy-efficient design
                ensures that the cleaning process consumes minimal power,
                further enhancing the green credentials of your solar
                installation.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 p-3 ">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Robust and Reliable</h5>
              <p className="card-text">
                Built to withstand harsh environmental conditions, our robots
                are highly durable and require minimal maintenance. They are
                designed to operate in extreme temperatures and challenging
                weather, ensuring reliable performance throughout the year. This
                robustness translates into lower operational costs and increased
                uptime for your solar power plant.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6  p-3">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Real-Time Monitoring and Reporting</h5>
              <p className="card-text">
                Our technology includes an integrated monitoring system that
                provides real-time updates and detailed reports on the condition
                of your solar panels. This feature allows you to track the
                cleaning performance and overall health of your solar array,
                helping you to make informed decisions and optimize maintenance
                schedules.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 p-3">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Easy Integration and Scalability</h5>
              <p className="card-text">
                Our panel cleaning robots are designed for easy integration with
                existing solar power plants. They can be seamlessly deployed
                across different types and sizes of installations, from
                residential rooftops to large-scale solar farms. The scalable
                design ensures that as your solar energy needs grow, our
                technology can grow with you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* project */}
      <div className="ms-3">
      <div
        className="card-header text-center border-0 fs-1" style={{ fontFamily: "AmstelvarAlpha", backgroundColor: "#ccddde", color: 'Black' }}>
        Featured Projects
      </div>
      <div className="card" style={{ fontFamily: "AmstelvarAlpha", backgroundColor: "#ccddde" }}>
        <div className="mx-auto">
          <div className="p-4 ">
            <button className="btn-16 btn16" onClick={() => handleCollapseToggle("collapseExample1")} aria-expanded={activeCollapse === "collapseExample1"} >
              <span>Rajasthan</span>
            </button>
            &nbsp;
            <button className="btn-16" onClick={() => handleCollapseToggle("collapseExample2")} aria-expanded={activeCollapse === "collapseExample2"}>
              <span>Gujarat</span>
            </button>
            &nbsp;
            <button className="btn-16" onClick={() => handleCollapseToggle("collapseExample3")} aria-expanded={activeCollapse === "collapseExample3"} >
              <span>Telangana</span>
            </button>
            &nbsp;
            <button className="btn-16" onClick={() => handleCollapseToggle("collapseExample4")} aria-expanded={activeCollapse === "collapseExample4"}>
              <span> Maharashtra</span>
            </button>
            &nbsp;
            <button className="btn-16" onClick={() => handleCollapseToggle("collapseExample5")} aria-expanded={activeCollapse === "collapseExample5"}>
              <span> Karnataka</span>
            </button>
            &nbsp;
            <Link to='/projects'> <button className="btn-16" onClick={() => handleCollapseToggle("collapseExample6")} aria-expanded={activeCollapse === "collapseExample6"} >
              <span>See More</span>
            </button> </Link>
            &nbsp;
</div>
            <div className="collapse mt-2" id="collapseExample1" style={{ display: activeCollapse === "collapseExample1" ? "block" : "none", }}>
              <div className="row g-0" style={{ backgroundColor: "white", borderLeft: "5px solid grey", }}>

                <div className="col-md-8">
                  <div className="card-body">
                    <p className="text-center fs-2 Bullet">Rajasthan</p>
                    <ul className="Bullet">
                    
                      <li>Hild Jaisalmer</li>
                      <li>PPAP Pathredi</li>
                      <li>Renew Bikaner</li> 
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/Rajasthan.jpeg" className="imgProject" alt="" />
                </div>
              </div>
            </div>


            <div className="collapse mt-2" id="collapseExample2" style={{ display: activeCollapse === "collapseExample2" ? "block" : "none", }}>
              <div className="row g-0" style={{ backgroundColor: "white", borderLeft: "5px solid grey", }}>

                <div className="col-md-8">
                  <div className="card-body">
                    <p className="text-center fs-2 Bullet ">Gujarat</p>
                    <ul className="Bullet">
                      <li>Mira Chattal Construction</li>
                      <li>Adani Hazira</li> 
                       </ul>
                  </div>
                </div>

                <div className="col-md-4">
                  <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/gujarat.jpeg" className="imgProject" alt="" />
                </div>
              </div>
            </div>

            <div className="collapse mt-2" id="collapseExample3" style={{ display: activeCollapse === "collapseExample3" ? "block" : "none", }}>
              <div className="row g-0" style={{ backgroundColor: "white", borderLeft: "5px solid grey", }}>

                <div className="col-md-8">
                  <div className="card-body">
                    <p className="text-center fs-2 Bullet">Telangana</p>
                    <ul className="Bullet">
                      <li>Premier</li>
                      <li>Juwi</li>
                      
                    </ul>
                  </div>
                </div>

                <div className="col-md-4">
                  <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/telangana.jpeg" className="imgProject" alt="" />
                </div>
              </div>
            </div>

            <div className="collapse mt-2" id="collapseExample4" style={{ display: activeCollapse === "collapseExample4" ? "block" : "none", }}>
              <div className="row g-0" style={{ backgroundColor: "white", borderLeft: "5px solid grey", }}>

                <div className="col-md-8">
                  <div className="card-body">
                    <p className="text-center fs-2 Bullet">Maharashtra</p>
                    <ul className="Bullet">
                      <li>Avaada Javatmal</li>
                      <li>Glaxo Smith</li>
                  

                    </ul>
                  </div>
                </div>

                <div className="col-md-4">
                  <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/maha4.jpeg" className="imgProject" style={{ height: '400px', width: '350px' }} alt="" />
                </div>
              </div>
            </div>

            <div className="collapse mt-2" id="collapseExample5" style={{ display: activeCollapse === "collapseExample5" ? "block" : "none", }}>
              <div className="row g-0" style={{ backgroundColor: "white", borderLeft: "5px solid grey", }}>

                <div className="col-md-8">
                  <div className="card-body">
                    <p className="text-center fs-2 Bullet">Karnataka</p>
                    <ul className="Bullet">
                      <li>Birla Rajshree Cement</li>
                      <li>Enerparc</li>
                  
                    </ul>
                  
                  </div>
                </div>

                <div className="col-md-4">
                  <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/karnataka.jpg" className="imgProject" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br />



      {/* clients */}
      <div>
        <h1 style={{fontFamily:'Monotype Corsiva', fontSize:'38px', textAlign:'center', fontWeight:'bold', color:'navy'}}>
          Our Clients
        </h1>
      </div>
      <br />
      <br />


      <div className="slider">
        <div className="slide-track">
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/adani-logo.png" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/renew.jpg" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/o2_power.png" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/gsk.png" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/avaada.jpg" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/hul.jpg" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/tatapower.png" alt="" style={{ width: "80px" }} className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/Premier.jpg" alt="" style={{ height: "100px" }} className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/denso.png" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/hero.png" alt="" style={{ height: "50px",width:"50px" }} className="slider-image"/>
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/Wilmar.jpg" alt="" style={{ height: "100px",width:"150px" }} className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/juwi.png" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/ntpc.png" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/stride.png" alt="" className="slider-image" />
          </div>

          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/adani-logo.png" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/renew.jpg" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/o2_power.png" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/gsk.png" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/avaada.jpg" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/hul.jpg" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/tatapower.png" alt="" style={{ width: "80px" }} className="slider-image"/>
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/Premier.jpg" alt="" style={{ height: "100px" }} className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/denso.png" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/hero.png" alt="" style={{ height: "50px",width:"50px" }} className="slider-image"/>
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/Wilmar.jpg" alt="" style={{ height: "100px",width:"150px" }} className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/juwi.png" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/ntpc.png" alt="" className="slider-image" />
          </div>
          <div className="slideimg">
            <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/stride.png" alt="" className="slider-image" />
          </div>
        </div>
      </div>


      {/* services */}
      <div>
       
        <h2 style={{fontFamily:'Monotype Corsiva', fontSize:'38px', textAlign:'center', fontWeight:'bold', color:'navy'}}> Our Services</h2>
        <div className="row rowMain ">
          <div className="col-sm-4">
            <div
              className="card shadow-lg p-3 mb-5 bg-body rounded"
              data-aos="slide-up"
            >
              <div className="card-body ">
                <h5 className="card-title heading"> Robotic Cleaning System</h5>
                <p className="card-text">
                
                  Skilancer solar is in the business of maximizing energy
                  production from Solar panels. We design and manufacture
                  automatic, self-powered, water less Solar Module cleaners for
                  decentralized, rooftop, and utility scale solar power plants.
                  We are engaged with our end customers right from the design
                  stage to understand their challenges, develop products and
                  offer services to improve their efficiency.
                </p>
                <Link to='/services'><button className="btn-4">
            <span>READ MORE</span>
                </button></Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card shadow-lg p-3 mb-5 bg-body rounded"
              data-aos="slide-up"
            >
              <div className="card-body">
                <h5 className="card-title heading">Operations & Maintenance</h5>
                <p className="card-text">
                
                  We have an experienced Operations & Maintenance division,
                  which takes preventive and corrective maintenance services for
                  solar power plants. Our team operates and maintains solar
                  power plants, offers monthly reporting on generation and
                  activities, provides project commissioning expertise along
                  with developing mechanism to retrieve and manage generation
                  data.
                </p>
                <Link to='/services'><button className="btn-4">
                  <span>Read More</span>
                </button></Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card shadow-lg p-3 mb-5 bg-body rounded"
              data-aos="slide-up"
            >
              <div className="card-body">
                <h5 className="card-title heading">EPC and I&C</h5>
                <p className="card-text">
                  Skilancer Solar Private Limited is a fully forward-integrated
                  and comprehensive EPC solutions provider. We deploy
                  world-class technology to design, install and commission
                  benchmark solar projects worldwide. The highly skilled and
                  dedicated EPC Team at Skilancer Solar ensures the completion
                  of each solar plant from concept to commissioning including
                  its operation and maintenance.
                </p>
                <Link to='/services'><button className="btn-4">
                  <span>Read More</span>
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Solutions */}
      <div>
        <h2 style={{fontFamily:'Monotype Corsiva', fontSize:'38px', textAlign:'center', fontWeight:'bold', color:'navy'}}> Our Solutions</h2>
      </div>
      <div className="solution">
        <div className="container1">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch p-5 ">
              <div className="card bg-dark text-white custom-card">
                <div className="card-bottom-text text-center">Automatic</div>
                <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/auto+(1).jpg" style={{ height: "450px", width: "500px" }} alt="..." />
                <div className="card-img-overlay ">
                  <button className="btn-blur" style={{ cursor: 'none' }}>Automatic</button>
                  <h5 className="card-title" style={{ fontWeight: "700" }}>
                    Automatic Solar Panel Cleaning Robot by Skilancer Solar
                  </h5>
                  <p className="card-text">
                    Skilancer Solar is at the forefront of innovation in the
                    solar industry, offering state-of-the-art solutions to
                    enhance the efficiency and longevity of your solar energy
                    systems. Our automatic solar panel cleaning robot is
                    designed to deliver unparalleled cleaning performance with
                    minimal human intervention, ensuring your solar panels
                    operate at their maximum potential.
                  </p>
                </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch p-5 ">
              <div className="card bg-dark text-white custom-card">
                <div className="card-bottom-text text-center">
                  Semi-Automatic
                </div>
                <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/semi.jpeg" className="card-img" alt="..." />
                <div className="card-img-overlay">
                  <button className="btn-blur" style={{ fontWeight: "700", cursor: 'none' }}>
                    Semi-Automatic
                  </button>
                  <h5 className="card-title" style={{ fontWeight: "700" }}>
                    Semi-Automatic Solar Panel Cleaning Robot by Skilancer Solar
                  </h5>
                  <p className="card-text">
                    Skilancer Solar is proud to introduce our innovative
                    semi-automatic solar panel cleaning robot, designed to
                    enhance the efficiency and performance of your solar energy
                    systems. Our advanced cleaning solution ensures that your
                    solar panels are free from dust, dirt, and other
                    contaminants, maximizing their energy output and lifespan.
                  </p>
                </div>
              
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch p-5">
              <div className="card bg-dark text-white custom-card">
                <div className="card-bottom-text text-center">Manual</div>
                <img
                  src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/manual.jpeg"
                  className="card-img" alt="..."
                  
                  style={{ fontWeight: "700", width: "500px" }}
                />
                <div className="card-img-overlay">
                  <button className="btn-blur" style={{ cursor: 'none' }} >Manual</button>
                  <h5 className="card-title" style={{ fontWeight: "700", cursor: 'none' }}>
                    Manual Solar Panel Cleaning Robot by Skilancer Solar
                  </h5>
                  <p className="card-text">
                    At Skilancer Solar, we are dedicated to
                    providing comprehensive solutions to ensure the optimal
                    performance of your solar energy systems. Our manual solar
                    panel cleaning robot is designed to offer effective and
                    precise cleaning for your solar panels, ensuring they
                    operate at peak efficiency.
                  </p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <br />
      
      {/* certificate 2 */}
      <div className="p-5 ms-3" id="grad2">
        <h2 style={{ color: "white", textAlign: "center", paddingBottom: "20px", fontWeight: 'bold', fontFamily: 'Calibiri' }} >
          Industry Recognitions
        </h2>

        <div className="parentcontainer">
          <div className="content1">
            <div className="card mb-3 ">
              <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/makeInd.jpg" alt="" className="certiImg" />
              <div className="card-body ">
               

              </div>
            </div>
          </div>
          <div className="content1">
            <div className="card mb-3 ">
              <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/ip68.jpg" alt="" className="certiImg" />
              <div className="card-body ">
                

              </div>
            </div>
          </div>
          <div className="content1">
            <div className="card mb-3 ">
              <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/nise.png" alt="" className="certiImg" />
              <div className="card-body ">
               

              </div>
            </div>
          </div>
          <div className="content1">
            <div className="card mb-3 ">
              <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/Trina.png" alt="" className="certiImg" />
              <div className="card-body ">
               
              </div>
            </div>
          </div>
          <div className="content1">
            <div className="card mb-3 ">
              <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/jinko.png" alt="" className="certiImg" />
              <div className="card-body ">
                
              </div>
            </div>
          </div>
          <div className="content1">
            <div className="card mb-3 ">
              <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/ul.png" alt="" className="certiImg" />
              <div className="card-body ">
                
              </div>
            </div>
          </div>
        </div>
      </div>
<br />
    </>
  );
}

export default Slide;
