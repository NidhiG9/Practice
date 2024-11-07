import "../src/About.css";
function Aboutus() {
  return (
    <>
      <div className="row row1" >
        <div className=" col-lg-5 col-md-3 col-sm-12">
          <div className="pic" />
          <div className="box1" />
          <div className="box2" />
        </div>
        <div className="aboutbox col-md-9 col-lg-5 p-5 col-sm-11 border border-black">
          <center>
            <h1 className="contentHead">ABOUT US</h1>
          </center>
          <p style={{ color: "black", fontSize: "30px" }}>Skilancer Solar</p>
          <p className="aboutpara">
            Skilancer Solar is all about making solar power plant installations
            sustainable through it's innovative & technology patented products.
            At core we believe sustainability can only be achieved with
            continous innovation with quality products. Skilancer Solar strives
            to play a significant role by making the solar power plant's self
            sustainable across the world and thus reducing the carbon footprint
            for a better tommorow.! Skilancer Solar is the first indigenous
            robotics & automation company for large scale solar power plants.
            Skilancer Solar have been instrumental in providing year round
            maximum efficiency of solar PV modules. Skilancer Solar offers cloud
            based, internet connected fleet of smart robotics systems for
            efficiency management of solar power plants.
          </p>
        </div>
      </div>

      {/* why us */}
      <div className="ps-5 pe-5">
        <div className="mx-auto">
          <div className="row ">

            <div className="col-md-4 col-sm-12">
              <div className="ribbonHead">
                <h1 className="h11">WHY SKILANCER SOLAR?</h1>

                <ul >
  <li>Our Product USP is its weight</li>
  <li>Our Product offers bi-directional daily cleaning</li>
  <li>Custom-built solution as per site requirements</li>
  <li>Unmatched after-sales support with more than 98% uptime</li>
  <li>Suitable for existing and upcoming solar plants</li>
  <li>Suitable for rooftop and ground mount installations</li>
  <li>Ability to handle site undulations and module alignments</li>
  <li>Widest range of commercial offerings</li>
</ul>

              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <img  src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/collage.png" alt="..." className="easyImag" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="card ms-3">
        <div className="card-body pattern ">
          <h5 className="card-title fw-bolder fs-1 " style={{ textDecoration: "underline", textAlign: "center" }}>
            WHAT MAKES US STAND OUT
            {/* <img src="http://files.rb.gd/atlanticimpact/scribble_6_blue.png" className="layer4"/> */}
          </h5>
          <br />

          <ul className="card-text text-start ps-5">
            <li>No additional structure required</li>
            <li>No external power supply required</li>
            <li>Self cleaning of brushes and solar panel on Robot</li>
            <li>Separate charging dock along side panels</li>
            <li>No alignment issue.</li>
            <li>Guaranteed increased power generation</li>
          </ul>
        </div>
      </div>
      <br />
      {/*  */}
      <div className="ps-5 pe-5 p-5">
        <div className="card text-center row1">
          <div className="card-body">
            <h5 className="card-title fw-bolder fs-2 ">
              FEASIBILTY OF INSTALLATION
            </h5>
            <p className="card-text fs-4" style={{ fontFamily: "calibiri" }}>
              Our robots can be installed in the fixed tilt structure, seasonal
              tilt structure and rooftops with the option to install in existing
              and upcoming solar power plants.
            </p>
            <br />

            <div className="card-group">
              <div className="card border-0" style={{ background: "transparent" }}>
                <h4> Fixed Tilt</h4>
                <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/feas1.png" className="card-img-top" alt="..." />
              </div>
              <div className="card border-0" style={{ background: "transparent" }}>
                <h4> Seasonal Tilt</h4>
                <img
                  src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/seasonal.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card border-0" style={{ background: "transparent" }}>
                <h4> Rooftop</h4>
                <img
                  src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/rooftop.png"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <br />
    </>
  );
}
export default Aboutus;
