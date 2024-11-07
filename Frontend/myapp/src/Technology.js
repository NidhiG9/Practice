import React from "react";
import "./Tech.css";
function Technology() {
  return (
    <>

      <div className="mainContain" >
        <div className="contain">
          <div className="text-contain">
            <div className="card text-center cardHeading">
              <div className="card-body">
                <h2 className="card-text fs-1 fw-bold">Technology</h2>
              </div>
            </div>

          </div>
        </div>
      </div>
      <br/>
      
      <div className="d-flex justify-content-center" >
      <div className="background">
        <div>
          <h4 style={{ textAlign: "center", padding: "40px", fontWeight: 'bold' }}>
            At Skilancer Solar, we are revolutionizing the solar energy industry
            with our state-of-the-art panel cleaning robots. Designed with
            cutting-edge technology and a deep understanding of the challenges
            faced by solar power plants, our robots ensure maximum efficiency and
            longevity of solar panels.
          </h4>
        </div>
        <br />
        {/* <div className="background"> */}
        <div className="card m-3 mainCon border-end" >
          <div className="row">
            <div className="col-md-5 ">
              <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/adv_cleaning.png" alt="" className="image"/>
            </div>
            <div className="col-md-6 ">
              <div className="card-body" style={{ color: 'black' }}>
                <h3 className="card-title fw-bold col-lg-me-5" >Advanced Cleaning Mechanism</h3>
                <p className="card-text" >
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
        </div>
        
                <div className="card mb-3 m-3 mainCon" >
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body" style={{ color: 'black' }}>
                <h3 className="card-title fw-bold">Intelligent Automation</h3>
                <p className="card-text">
                  Equipped with AI and machine learning algorithms, our robots
                  are capable of autonomous operation. They can schedule
                  cleanings based on real-time data and weather conditions,
                  ensuring optimal performance at all times. The robots navigate
                  the entire solar array with precision, avoiding obstacles and
                  adapting to different panel layouts.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/intelligent.jpg" alt="..." className="image1" />
            </div>
          </div>
        </div>
        
        <div className="card m-3 mainCon">
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/ecofriendlyPanel.png"
                alt=""
                className="image"
              />
            </div>
            <div className="col-md-7">
              <div className="card-body" style={{ color: 'black' }}>
                <h3 className="card-title fw-bold">Sustainable and Eco-Friendly</h3>
                <p className="card-text">
                  We are committed to sustainability. Our cleaning robots
                  operate without the use of chemicals or water, making them an
                  eco-friendly solution that conserves natural resources and
                  reduces environmental impact. The energy-efficient design
                  ensures that the cleaning process consumes minimal power,
                  further enhancing the green credentials of your solar
                  installation.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card mb-3 m-3 mainCon">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body" style={{ color: 'black' }}>
                <h3 className="card-title fw-bold">Robust and Reliable</h3>
                <p className="card-text">
                  Built to withstand harsh environmental conditions, our robots
                  are highly durable and require minimal maintenance. They are
                  designed to operate in extreme temperatures and challenging
                  weather, ensuring reliable performance throughout the year.
                  This robustness translates into lower operational costs and
                  increased uptime for your solar power plant.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/robost.png" alt="..." className="image1" />
            </div>
          </div>
        </div>
        
        <div className="card m-3 mainCon ">
          <div className="row g-0">
            <div className="col-md-5">
              <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/real_time.jpg" alt="" className="image" />
            </div>
            <div className="col-md-7">
              <div className="card-body" style={{ color: 'black' }}>
                <h3 className="card-title fw-bold">
                  Real-Time Monitoring and Reporting
                </h3>
                <p className="card-text">
                  Our technology includes an integrated monitoring system that
                  provides real-time updates and detailed reports on the
                  condition of your solar panels. This feature allows you to
                  track the cleaning performance and overall health of your
                  solar array, helping you to make informed decisions and
                  optimize maintenance schedules.
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="card mb-3 m-3 mainCon">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body" style={{ color: 'black' }}>
                <h3 className="card-title fw-bold">Easy Integration and Scalability</h3>
                <p className="card-text">
                  Our panel cleaning robots are designed for easy integration
                  with existing solar power plants. They can be seamlessly
                  deployed across different types and sizes of installations,
                  from residential rooftops to large-scale solar farms. The
                  scalable design ensures that as your solar energy needs grow,
                  our technology can grow with you.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/easy.jpg" alt="..." className="image1" />
            </div>
          </div>
        </div>
      </div>
</div>
    </>
  );
}
export default Technology;
