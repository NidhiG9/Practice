import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  const openMapPage = () => {
    const mapUrl =
      "https://www.google.com/maps/place/Vatika+Mindscapes,+Sector+27D,+Faridabad,+Haryana/@28.4666675,77.3120617,13z/data=!4m6!3m5!1s0x390ce73b79ec5c3f:0x77bc01291e64b260!8m2!3d28.4798382!4d77.3033639!16s%2Fg%2F11n6sppkks?entry=ttu";
    window.open(mapUrl, "_blank");
  };

  const openMapPage2 = () => {
    const mapUrl =
      "https://www.google.com/maps/place/Skilancer+Solar+(P)+Ltd./@28.462768,77.30807,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce733dadd332d:0x72efcb4076f83818!8m2!3d28.462768!4d77.3106449!16s%2Fg%2F11j97k4qf2?entry=tts";
    window.open(mapUrl, "_blank");
  };

  return (
    <>
      <footer className="footer" style={{width:"99.8%"}}>
        <div
          className="row "
          style={{ background: "linear-gradient(45deg, #031930, #567184)" }}
        >
          <div className="col-sm-4 ">
            <div className="card border-0" style={{ background: "transparent" }}>
              <div className="card-body">

                <div className="address1">
                  <h4 className="contactfooter">
                    <b>Skilancer Solar</b> <br /> <br />
                  </h4>
                  <br />
                  <p className="footerpara"> Contact Us:</p>
                  <p className="footerpara0">
  <b>Office</b> <br />
  <span className="fs-6" style={{cursor:"pointer"}} onClick={openMapPage}>
    4th Floor, Tower-B Vatika Mindscapes, Sector 27D Faridabad, Haryana 121003 <br />
  </span>
</p>

                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 ">
            <div className="card border-0 pe-4 divfactory" style={{ background: "transparent" }}>
              <div className="card-body ">
              <p className="footerpara1">
  <br />
  <b className="fs-3 ">Factory </b>
  <br />
  <span className="fs-6" style={{cursor:"pointer"}} onClick={openMapPage2}>
    A 17, DLF Industrial Area Sector 32 Faridabad Haryana 121003 (Landmark - near NHPC Metro Station)
  </span> 
  <br />
</p>
                <br />
                <p className="footerpara2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>{" "}
                  &nbsp; Phone: +91-7683052276 <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  &nbsp;&nbsp; Email: <a href="mailto:contact@skilancer.com" style={{ textDecoration: 'None' ,color:'white'}}>
                             contact@skilancer.com
                        </a>
                  <br />
                  <a
                    href="https://www.youtube.com/results?search_query=skilancer+solar"
                    target="blank"
                  >
                    <img src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/youtube.png" alt="" />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://in.linkedin.com/company/skilancersolar"
                    target="blank"
                  >
                    <img
                      src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/linkedin.png"
                      alt=""
                      className="custom-image "
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card border-0" style={{ background: "transparent" }}>
              <div className="card-body">
                <div className="usefulLink">
                  <b className="fs-3">Links</b> <br />
                  <Link to="/" className="usefulLink1">
                    Home
                  </Link>
                  <Link to="/technology" className="usefulLink1">
                    Technology
                  </Link>
                  <Link to="/services" className="usefulLink1">
                    Services
                  </Link>
                  <Link to="/projects" className="usefulLink1">
                    Projects
                  </Link>
                  <Link to="/career" className="usefulLink1">
                    Careers
                  </Link>
                  <Link to="/contactus" className="usefulLink1">
                    Contact Us
                  </Link>
                  <Link to="/aboutus" className="usefulLink1">
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
export default Footer;
