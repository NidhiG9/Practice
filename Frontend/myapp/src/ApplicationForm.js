import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "./application.css";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    position: "",
    cover_Letter: "",
    resume: "",
    captchaText: "",
  });

  const [captcha, setCaptcha] = useState("");
  const [typedCaptcha, setTypedCaptcha] = useState("");
  const canvasRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCaptchaChange = (e) => {
    setTypedCaptcha(e.target.value);
  };

  const generateCaptcha = () => {
    const canvas = canvasRef.current;
    const pen = canvas.getContext("2d");
    const captchaText = Math.random().toString(36).substring(2, 8);

    // Clear canvas
    pen.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background rectangle
    pen.fillStyle = "grey";
    pen.fillRect(0, 0, canvas.width, canvas.height);

    // Add captcha text with random capitalized letters
    pen.font = "30px Georgia";
    pen.fillStyle = "orange";
    let captcha = captchaText;
    const maxLength = captcha.length;
    const index1 = Math.floor(Math.random() * maxLength);
    const index2 = Math.floor(Math.random() * maxLength);

    if (index1 > 0) {
      captcha = captcha.substring(0, index1) + captcha[index1].toUpperCase() + captcha.substring(index1 + 1);
    }
    if (index2 > 0) {
      captcha = captcha.substring(0, index2) + captcha[index2].toUpperCase() + captcha.substring(index2 + 1);
    }

    setCaptcha(captcha);
    const spacedCaptcha = captcha.split("").join(" ");
    pen.fillText(spacedCaptcha, 40, 40);

    // Add a static line over the captcha text
    pen.beginPath();
    pen.moveTo(30, 30);
    pen.lineTo(canvas.width - 30, 30);
    pen.strokeStyle = "black";
    pen.lineWidth = 2;
    pen.stroke();
  };

  useEffect(() => {
    generateCaptcha();
  }, []);
  const[printMessage,setPrintMessage]=useState("")


  const handleSubmit = (p) => {
    p.preventDefault();

    // Validate mobile number
    if (formData.mobile.length !== 10) {
      alert("Mobile number must be exactly 10 digits long.");
      return;
    }

    // Validate captcha
    if (typedCaptcha !== captcha) {
      setPrintMessage("Incorrect Captcha")
      generateCaptcha(); // refresh captcha
      return;
    }

    const serviceId = "service_3joh22e";
    const templateId = "template_fh1ou8l";
    const publicKey = "8guKYuvqShg9iEloy";

    const templateParams = {
      from_name: formData.name,
      from_mobile: formData.mobile,
      from_email: formData.email,
      position: formData.position,
      cover_Letter: formData.cover_Letter,
      resume: formData.resume,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        alert("Application submitted successfully!");
        setFormData({ name: "", mobile: "", email: "", position: "", cover_Letter: "", resume: "" });
        setTypedCaptcha("");
        generateCaptcha(); // refresh captcha
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to submit application.");
      });
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage:
          'url("https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/application.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "101%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1581092337673-4a4e931f3526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzI3OXwwfDF8c2VhcmNofDF8fGpvYnwwfHx8fDE2OTcwMDY2NzU&ixlib=rb-1.2.1&q=80&w=1080")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "40px 0",
        }}
      >
        <form className="p-4 mt-5 formbg" onSubmit={handleSubmit}>
          <div className="d-flex align-items-center mb-4">
            <img
              height={80}
              src="https://official-website-skilancersolar.s3.ap-south-1.amazonaws.com/Image/skilancerlogo1.png"
              alt="Logo"
            />
            <h2 className="ms-3">Application Form</h2>
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label fs-5">
              Full Name <span style={{ color: "#ff0011", fontSize: "20px" }}> *</span>
            </label>
            <input
              type="text"
              className="form-control border border-success"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              style={{ width: "350px" }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="form-label fs-5">
              Phone Number <span style={{ color: "#ff0011", fontSize: "20px" }}> *</span>
            </label>
            <input
              type="number"
              className="form-control border border-success"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
              required
              style={{ width: "350px" }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fs-5">
              Email Address <span style={{ color: "#ff0011", fontSize: "20px" }}> *</span>
            </label>
            <input
              type="email"
              className="form-control border border-success"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              style={{ width: "350px" }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="position" className="form-label fs-5">
              Position <span style={{ color: "#ff0011", fontSize: "20px" }}> *</span>
            </label>
            <input
              type="text"
              className="form-control border border-success"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Position"
              required
              style={{ width: "350px" }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cover_Letter" className="form-label fs-5">
              Cover letter <span style={{ color: "#ff0011", fontSize: "20px" }}> *</span>
            </label>
            <textarea
              className="form-control border border-success"
              id="cover_Letter"
              name="cover_Letter"
              value={formData.cover_Letter}
              onChange={handleChange}
              placeholder="Cover letter"
              style={{ width: "350px" }}
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="resume" className="form-label fs-5">
              Resume Link <span style={{ color: "#ff0011", fontSize: "20px" }}> *</span>
            </label>
            <input
              type="text"
              className="form-control border border-success"
              id="resume"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              placeholder="Publicly accessible"
              required
              style={{ width: "350px" }}
            />
          </div>

          {/* Captcha */}
          <div className="mb-3">
            <label htmlFor="captcha" className="form-label fs-5">
              Captcha <span style={{ color: "#ff0011", fontSize: "20px" }}> *</span>
            </label>
            <div>
              <canvas ref={canvasRef} width="220" height="60" style={{ border: "2px solid #a29b9b" }}></canvas>
              <br />
              <button
                type="button"
                className="btn btn-secondary mt-2"
                onClick={generateCaptcha}
              >
               ↺
              </button>
            </div>
          </div>

          <div className="mb-3">
          <p className="text-danger">{printMessage}</p>
            <label htmlFor="captchaInput" className="form-label fs-5">
              Enter Captcha <span style={{ color: "#ff0011", fontSize: "20px" }}> *</span>
            </label>
            <input
              type="text"
              className="form-control border border-success"
              id="captchaInput"
              name="captchaInput"
              value={typedCaptcha}
              onChange={handleCaptchaChange}
              placeholder="Enter captcha"
              required
              style={{ width: "350px" }}
            />
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-outline-primary w-40">
            <h2 className="fs-4">Submit</h2>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
