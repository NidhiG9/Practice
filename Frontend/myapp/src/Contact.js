import React, { useState } from "react";
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    question: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = (p) => {
    p.preventDefault();
    console.log(formData)
    if (formData.mobile.length !== 10) {
      alert("Mobile number must be exactly 10 digits long.");
      return;
    }

    const serviceId = 'service_3joh22e';
    const templateId = 'template_5rl0u3i';
    const publicKey = '8guKYuvqShg9iEloy';

    const templateParams = {
      from_name: formData.name,
      from_mobile: formData.mobile,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.question,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        alert("Application submitted successfully!");
        setFormData({ name: '', mobile: '', email: '', subject: '', question: '' });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to submit application.");
      });
  };

  return (
    <div className="container1 mb-5" id="" style={{marginTop:"100px"}} >
      <div className="form-container sign-in-container ">
        <form onSubmit={handleSubmit}>
          <h2 className="fs-1">Contact us</h2>
          <br /><br />
          <input 
            type="text" 
            placeholder="Name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="number" 
            placeholder="Mobile No." 
            name="mobile" 
            value={formData.mobile} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            placeholder="Subject" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            placeholder="Question" 
            name="question" 
            value={formData.question} 
            onChange={handleChange} 
            required 
          />
          <br />
          <button type="submit" className="cubutton">Submit</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h2 className="fs-2">Skilancer Solar Pvt Ltd.</h2> 
            <br />
            <h3>Office</h3>
            <br />
            <p>4th Floor, Tower-B Vatika Mindscapes, Sector 27D Faridabad, Haryana 121003</p>
            <br />
            <h3>Factory</h3> 
            <br />
            <p>Factory- A 17, DLF Industrial Area Sector 32 Faridabad Haryana 121003 (Landmark - near NHPC Metro Station)</p>
            <br /><br />
            <p className=" number">Phone: +91-7683052276</p>
            <p className=" number">Email: <a href="mailto:contact@skilancer.com" style={{ textDecoration: 'None' ,color:'white'}}>
                             contact@skilancer.com
                        </a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
