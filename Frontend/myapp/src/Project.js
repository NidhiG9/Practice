import { useEffect } from 'react';
import './Project.css'
import { useState } from 'react';
// import CountUp from 'react-countup'
// import AOS from 'aos';
function Project() {
    const [deploy, setDeploy] = useState(1800);
  const [statect, setStatect] = useState(1);

  useEffect(() => {
    const deployInterval = setInterval(() => {
        setDeploy(prevDeploy => {
          if (prevDeploy < 1987) {
            return prevDeploy + 1;
          } else {
            clearInterval(deployInterval);
            return prevDeploy;
          }
        });
      }, 30);
  
      const statectInterval = setInterval(() => {
        setStatect(prevStatect => {
          if (prevStatect < 18) {
            return prevStatect + 1;
          } else {
            clearInterval(statectInterval);
            return prevStatect;
          }
        });
      }, 120);
  
      // Cleanup intervals on component unmount
      return () => {
        clearInterval(deployInterval);
        clearInterval(statectInterval);
      };
  }, []);

    return (
        <>
          
                <div className='card' style={{width:"101%"}}>
                    <div className='imgTxt'>
                        <div className='imgtxtBack'>
                            <h2 style={{ fontFamily: 'calibiri', fontWeight: '600' }}>Our Projects</h2><br />
                            <p style={{ color: '#0e1c4a' }}>At Skilancer Solar, we are pioneering the future of clean energy through inNo.vative solar solutions. Our mission is to harness the power of the sun to create a sustainable and energy-efficient world. We believe that solar energy is the key to a greener future, and we are committed to making it accessible and efficient for everyone.</p>
                        </div>
                    </div>
                </div>


                <br />

                {/* new  development card */}
                
                <div className="row">
                {/* <ScrollTriger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}> */}
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body text-center">
                                 <h1 className="card-title">
                                    Deployments</h1>
                                    <p className=' text-danger fs-1 card-text' >{deploy}+</p>

                            </div>
                        </div>
                    </div>
                    {/* </ScrollTriger> */}
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body text-center">
                             <h1  className="card-title">States</h1>
                                <p className="card-text text-danger fs-1">{statect}+</p>
                            

                            </div>
                        </div>
                    </div>
                </div>
          
            <br />

            {/* new */}
            <div className="card mb-3 " style={{ backgroundColor: 'rgb(206, 220, 226' }} id='gujarat'>
                <h2 className='stateHeading'>Gujarat</h2>
                <div className="row g-0" >

                    <div className="col-md-8">
                        <div className="card-body">

                            <div className="accordion" id="accordionExample1">
                                <div className="accordion-item"  >
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                                            Adani Hazira Port Limited
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample1">
                                        <div className="accordion-body">
                                            <p>Location: Surat</p>
                                            <p>Plant Capacity: 3MW </p>
                                          
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            Adani Wilmar limited
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample1">
                                        <div className="accordion-body">
                                            <p>Location: Surat</p>
                                            <p>Plant Capacity: 1 MW </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Landmark
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample1">
                                        <div className="accordion-body">
                                            <p>Location: Ahmedabad</p>
                                            <p>Plant Capacity: 129KW</p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ backgroundColor: 'No.ne' }}>
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-controls="collapseFour" >
                                            High urja
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample1">
                                        <div className="accordion-body">
                                            <p>Location: Surat</p>
                                            <p>Plant Capacity: 24MW </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Chattle Construction
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample1">
                                        <div className="accordion-body">
                                            <p>Location: Surat</p>
                                            <p>Plant Capacity: 25MW </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            Renew Power
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample1">
                                        <div className="accordion-body">
                                            <p>Location: Patan</p>
                                            <p>Plant Capacity: 1000KW </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/gujarat.jpeg" className="img-fluid rounded-start" style={{ height: '400px' }} alt="..." />
                    </div>
                </div>
            </div>
            <br />

            {/* Telangana*/}

            <div className="card mb-3" style={{ backgroundColor: 'rgb(206, 220, 226' }} >
                <h2 className='stateHeading'>Telangana</h2>
                <div className="row g-0">

                    <div className="col-md-8">
                        <div className="card-body">

                            <div className="accordion" id="accordionExample2">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEleven">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="true" aria-controls="collapseEleven" >
                                            Premier Energy Photovoltaic
                                        </button>
                                    </h2>
                                    <div id="collapseEleven" className="accordion-collapse collapse " aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">

                                            <p>Location: Hyderabad</p>
                                            <p>Plant Capacity: 6MW </p>
                                            
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading12">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">

                                            AWL Mantralayam
                                        </button>
                                    </h2>
                                    <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            <p>Location: Mantralayam</p>
                                            <p>Plant Capacity: 1MW </p>
                                             <br />


                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading13">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                            AWL Krishnapatnam
                                        </button>
                                    </h2>
                                    <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="headingThr" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">

                                            <p>Location: Krishnapatnam</p>
                                            <p>Plant Capacity: 134.82KW  </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ backgroundColor: 'None' }}>
                                    <h2 className="accordion-header" id="heading14">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-controls="collapse14" >
                                            Artha Vijayvaada
                                        </button>
                                    </h2>
                                    <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            <p>Location: Vijayvaada</p>
                                            <p>Plant Capacity: 250KW </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading15">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                                            Bequer Parkson
                                        </button>
                                    </h2>
                                    <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            <p>Location: Tirupati</p>
                                            <p>Plant Capacity: 1000KW </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/telanagana2.jpeg" className="img-fluid rounded-start" style={{ height: '400px' }} alt="..." />
                    </div>
                </div>
            </div>

            <br />

            {/* Maharashtra*/}

            <div className="card mb-3" style={{ backgroundColor: 'rgb(206, 220, 226' }} >
                <h2 className='stateHeading'>Maharashtra</h2>
                <div className="row g-0">

                    <div className="col-md-8">
                        <div className="card-body">

                            <div className="accordion" id="accordionExample3">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading116">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="true" aria-controls="collapse16" >
                                            O2 Power
                                        </button>
                                    </h2>
                                    <div id="collapse16" className="accordion-collapse collapse " aria-labelledby="heading16" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            <p>Location: Georai</p>
                                            <p>Plant Capacity:  25MW</p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading17">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                                            Glaxo Smithkline Pharmaceuticals Ltd.
                                        </button>
                                    </h2>
                                    <div id="collapse17" className="accordion-collapse collapse" aria-labelledby="heading17" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            <p>Location: Nasik</p>
                                            <p>Plant Capacity:  1MW</p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading18">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse3">
                                            ITC Pune
                                        </button>
                                    </h2>
                                    <div id="collapse18" className="accordion-collapse collapse" aria-labelledby="heading18" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">

                                            <p>Location: Pune</p>
                                            <p>Plant Capacity: 0.5MW  </p>
                                            <br />


                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ backgroundColor: 'No..ne' }}>
                                    <h2 className="accordion-header" id="heading19">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-controls="collapse19" >
                                            Avaada Clean Project Private Limited
                                        </button>
                                    </h2>
                                    <div id="collapse19" className="accordion-collapse collapse" aria-labelledby="heading19" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            <p>Location: Yavatmal</p>
                                            <p>Plant Capacity: 100MW </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading20">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                                            Enerparc Jalgaon
                                        </button>
                                    </h2>
                                    <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            <p>Location: Jalgaon</p>
                                            <p>Plant Capacity: 4.5MW </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading21">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse21" aria-expanded="false" aria-controls="collapse21">
                                            Bequer Pune
                                        </button>
                                    </h2>
                                    <div id="collapse21" className="accordion-collapse collapse" aria-labelledby="heading21" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            <p> Location: Pune</p>
                                            <p> Plant Capacity: 1000KW  </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/maha.jpeg" className="img-fluid rounded-start" style={{ height: '400px' }} alt="..." />
                    </div>
                </div>
            </div>

            <br />

            {/* West Bengal*/}

            <div className="card mb-3" style={{ backgroundColor: 'rgb(206, 220, 226' }} >
                <h2 className='stateHeading'>West Bengal</h2>
                <div className="row g-0">

                    <div className="col-md-8">
                        <div className="card-body">

                            <div className="accordion" id="accordionExample4">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading22">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse22" aria-expanded="true" aria-controls="collapse22" >
                                            Gewis
                                        </button>
                                    </h2>
                                    <div id="collapse22" className="accordion-collapse collapse" aria-labelledby="heading22" data-bs-parent="#accordionExample4">
                                        <div className="accordion-body">
                                            <p>Location: Haldia</p>
                                            <p>Plant Capacity: 1MW </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/wb+(1).jpg" className="img-fluid rounded-start" style={{ height: '200px', marginBottom: '10px' }} alt="..." />
                    </div>
                </div>
            </div>

            {/* Haryana*/}

            <div className="card mb-3" style={{ backgroundColor: 'rgb(206, 220, 226' }} >
                <h2 className='stateHeading'>Haryana</h2>
                <div className="row g-0">

                    <div className="col-md-8">
                        <div className="card-body">

                            <div className="accordion" id="accordionExample5">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading23">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse23" aria-expanded="true" aria-controls="collapse23" >
                                            Denso
                                        </button>
                                    </h2>
                                    <div id="collapse23" className="accordion-collapse collapse " aria-labelledby="heading23" data-bs-parent="#accordionExample5">
                                        <div className="accordion-body">
                                            <p>Location: Manesar</p>
                                            <p>Plant Capacity: 1MW </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading24">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse24" aria-expanded="false" aria-controls="collapse24">
                                            Hero Motocorp
                                        </button>
                                    </h2>
                                    <div id="collapse24" className="accordion-collapse collapse" aria-labelledby="heading24" data-bs-parent="#accordionExample5">
                                        <div className="accordion-body">
                                            <p>Location: Dharuhera</p>
                                            <p>Plant Capacity: 6MW </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading25">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse25" aria-expanded="false" aria-controls="collapse25">
                                            HUL Sonipat
                                        </button>
                                    </h2>
                                    <div id="collapse25" className="accordion-collapse collapse" aria-labelledby="heading25" data-bs-parent="#accordionExample5">
                                        <div className="accordion-body">
                                            <p>Location: Sonipat</p>
                                            <p>Plant Capacity: 1MW  </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ backgroundColor: 'No..ne' }}>
                                    <h2 className="accordion-header" id="heading26">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse26" aria-controls="collapse26" >
                                            Wave Aircom
                                        </button>
                                    </h2>
                                    <div id="collapse26" className="accordion-collapse collapse" aria-labelledby="heading26" data-bs-parent="#accordionExample5">
                                        <div className="accordion-body">
                                            <p>Location:Bhiwadi </p>
                                            <p>Plant Capacity: .5MW  </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading27">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse27" aria-expanded="false" aria-controls="collapse27">
                                            Clean Teach
                                        </button>
                                    </h2>
                                    <div id="collapse27" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample5">
                                        <div className="accordion-body">
                                            <p>Location: Sirsa</p>
                                            <p>Plant Capacity: 15MW </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/Haryana.jpeg" className="img-fluid rounded-start" style={{ height: '400px' }} alt="..." />
                    </div>
                </div>
            </div>

            {/* Tamil Nadu*/}

            <div className="card mb-3" style={{ backgroundColor: 'rgb(206, 220, 226' }} >
                <h2 className='stateHeading'>Tamil Nadu </h2>
                <div className="row g-0">

                    <div className="col-md-8">
                        <div className="card-body">

                            <div className="accordion" id="accordionExample6">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading29">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse29" aria-expanded="true" aria-controls="collapse29" >
                                            Continuum
                                        </button>
                                    </h2>
                                    <div id="collapse29" className="accordion-collapse collapse" aria-labelledby="heading29" data-bs-parent="#accordionExample6">
                                        <div className="accordion-body">
                                            <p>Location: Coimbatore</p>
                                            <p>Plant Capacity: 78MW</p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading30">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse30" aria-expanded="false" aria-controls="collapse30">
                                            Enerparc Tamilnadu
                                        </button>
                                    </h2>
                                    <div id="collapse30" className="accordion-collapse collapse" aria-labelledby="heading30" data-bs-parent="#accordionExample6">
                                        <div className="accordion-body">
                                            <p>Location: Madhurai</p>
                                            <p>Plant Capacity:  33MW</p>
                                            <br />

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/tamil1.jpeg" className="img-fluid rounded-start" style={{ height: '400px' }} alt="..." />
                    </div>
                </div>
            </div>

            {/* Rajasthan*/}

            <div className="card mb-3" style={{ backgroundColor: 'rgb(206, 220, 226' }} id='rajasthan'>
                <h2 className='stateHeading'>Rajasthan</h2>
                <div className="row g-0">

                    <div className="col-md-8">
                        <div className="card-body">

                            <div className="accordion" id="accordionExample7">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading31">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse31" aria-expanded="true" aria-controls="collapse31" >
                                            Knitpro International
                                        </button>
                                    </h2>
                                    <div id="collapse31" className="accordion-collapse collapse" aria-labelledby="heading31" data-bs-parent="#accordionExample7">
                                        <div className="accordion-body">
                                            <p>Location: Jaipur</p>
                                            <p>Plant Capacity:  44KW</p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading32">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse32" aria-expanded="false" aria-controls="collapse32">
                                            PPAP Pathredi
                                        </button>
                                    </h2>
                                    <div id="collapse32" className="accordion-collapse collapse" aria-labelledby="heading32" data-bs-parent="#accordionExample7">
                                        <div className="accordion-body">
                                            <p>Location: Pathredi </p>
                                            <p>Plant Capacity: 1MW </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading33">
                                        <button className="accordion-button collapsed textState" type="button" data-bs-toggle="collapse" data-bs-target="#collapse33" aria-expanded="false" aria-controls="collapse33">
                                            Renew Power
                                        </button>
                                    </h2>
                                    <div id="collapse33" className="accordion-collapse collapse" aria-labelledby="heading33" data-bs-parent="#accordionExample7">
                                        <div className="accordion-body">
                                            <p>Location: Bikaner </p>
                                            <p>Plant Capacity: 250MW  </p>
                                            <br />

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/rajasthan1.jpg" className="img-fluid rounded-start" style={{ height: '400px' }} alt="..." />
                    </div>
                </div>
            </div>

        </>
    );
}
export default Project;
