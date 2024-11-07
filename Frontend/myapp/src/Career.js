import { useNavigate} from "react-router-dom";
import './Career.css'
import { useState, useEffect } from 'react';

function Career() {
  const navigate = useNavigate();

  const [printdata, setPrintData] = useState([]);

async function send() {
  try {
    const response = await fetch("https://www.skilancersolar.com:4000/get");
    const res = await response.json();
    setPrintData(res);
  } catch (err) {
    console.log(err);
  }
}

useEffect(() => {
  send(); // Call send() when the component mounts
}, []); // Empty dependency array ensures this runs only once

return (
  <>
    {/* Hero Image Section */}
    <div>
      <img
        className="imgcareer"
        src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/career.jpeg"
        alt="Career"
        style={{ width: "101%", height: 470 }}
      />
    </div>

    

    {/* Cards Container */}
    <div style={{ margin: '20px' }}>
      <div className="row">
        {/* Iterate over the data and display each item as a card */}
        {printdata.map((e, index) => (
          <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={index}>
            <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{ width: "100%",border:"none" }}>
              
              <div className="card-body" style={{ padding: '15px' }}>
                {/* Job Description */}
                <p className="fs-6">
                  <b>{e.jobdescription}</b>
                </p>

                {/* More Details Link */}
                <p
                  className="links"
                  style={{ cursor: "pointer", color: '#007bff',}}
                  onClick={() => navigate('/job', { state: { robotId: e._id } })}
                >
                  More Details →
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

}
export default Career;
