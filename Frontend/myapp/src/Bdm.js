import { useState, useEffect } from 'react';
import './Bdm.css';
import { useLocation, Link } from 'react-router-dom';

function Bdm() {
    const location = useLocation();
    const jobId = location.state ? location.state.robotId : null;
    const [printdata, setPrintData] = useState([]);

    async function getById() {
        try {
            const response = await fetch(`https://www.skilancersolar.com:4000/get/${jobId}`);
            const res = await response.json();
            setPrintData(res);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getById();
    }, []);

    return (
        <>
            <div className="card mainBdm " style={{marginTop:"100px"}}>
                <div className="card-header fw-bolder">
                    <>Profile –  {printdata.jobdescription}</>
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold text-decoration-underline">Company Profile</h5>
                    <p className="card-text">
                        Skilancer Solar Private Limited specialises in providing permanent professional cleaning services of solar panels of commercials parks & establishments. SSPL is a fully forward integrated and comprehensive EPC solutions provider. We deploy world-class technology to design, install and commission benchmark solar projects worldwide. We are in the business of maximizing energy production from Solar panels. We design and manufacture automatic, self-powered, waterless Solar Module cleaners for decentralized, rooftop, and utility scale solar power plants. We are engaged with our end customers right from the design stage to understand their challenges, develop products and offer services to improve their efficiency. Our products and solutions help protect the environment. Our O&M team has an experience of over 30 MW of projects globally & combined experience exceeds 70+ MW in handling large scale EPC and I&C projects across different landscapes like Rooftop, Ground Mounted and Canal Top projects across India.
                    </p>
                    <br />
                    <h6 className="card-title fw-bold">Function/Department : {printdata.department}</h6>
                    <h6 className="card-title fw-bold">Job Location : {printdata.JobLocation}</h6>
                    <h6 className="card-title fw-bold">Educational Qualification : {printdata.qulification}</h6>
                    <h6 className="card-title fw-bold">Experience : {printdata.experience}</h6>
                    <h6 className="card-title fw-bold">Job Type : {printdata.time}</h6>

                    <h5 className="card-title fw-bold text-decoration-underline text-center">JOB DESCRIPTION</h5>

                    <h6 className="card-title fw-bold">Job Purpose</h6>
                    <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>
                        {printdata.JobPurpose}
                    </p>

                    <h6 className="card-title fw-bold">Job Responsibility</h6>
                    <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>
                        {printdata.JobResponsibility}
                    </p>

                    <h6 className="card-title fw-bold">Requirement</h6>
                    <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>
                        {printdata.Requirement}
                    </p>

                    <h6 className="card-title fw-bold">Skills</h6>
                    <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>
                        {printdata.Skills}
                    </p>

                <br/>

                    <h6 className="card-title">
                        Please submit your resume and cover letter to{' '}
                        <a href="mailto:hrconnect@skilancer.com" style={{ textDecoration: 'underline' }}>
                            hrconnect@skilancer.com
                        </a>
                    </h6>
                    <Link to="/ApplicationForm" className="btn btn-primary">Apply Now</Link>
                </div>
            </div> <br />
        </>
    );
}

export default Bdm;
