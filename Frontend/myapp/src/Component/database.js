import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Adddatabase() {
const navigate=useNavigate()

function logOut(){
  sessionStorage.removeItem("username")
  sessionStorage.removeItem("password")
  navigate("/")
}



  const [printdata, setPrintData] = useState([]);

async function getData() {
  try {
    const response = await fetch("https://www.skilancersolar.com:4000/get");
    const res = await response.json();
    setPrintData(res);
  } catch (err) {
    console.log(err);
  }
}

useEffect(() => {
  getData(); // Call send() when the component mounts
}, []); // Empty dependency array ensures this runs only once

// delete data/
async function deleteData(id){
setDeleteId(id)
}
  
const[deleteidprofile,setDeleteId]=useState('');
async function deleteid(id){
  try {
    console.log("id",id)
    const response = await fetch(`https://www.skilancersolar.com:4000/deletedata/${id}`, {
      method: 'DELETE'
    });
    const res = await response.json();
    alert(res.message);
    window.location.reload()
  } catch (err) {
    console.log("Error:", err);
    alert("An error occurred while deleting the data.");
  }
  
}
// upload data
  const [data, setData] = useState({
    jobdescription: "",
    position: "",
    department: "",
    JobLocation: "",
    qulification: "",
    experience: "",
    time: "",
      JobPurpose:"",
      JobResponsibility:"",
      Requirement:"",
      Skills:"",
      Preference:"",
  });

  async function submit(e) {
       await send();
    setData({
      jobdescription: "",
      position: "",
      department: "",
      JobLocation: "",
      qulification: "",
      experience: "",
      time: "",
      JobPurpose:"",
      JobResponsibility:"",
      Requirement:"",
      Skills:"",
      Preference:"",

    });
  }

  async function send() {
    try {
      const response = await fetch("https://www.skilancersolar.com:4000/post", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      window.location.reload()
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const res = await response.json();
    } catch (err) {
      console.log("Error in fetch:", err);
    }
  }
  // update
  const [editData, setEditData] = useState({
    _id: "",
    jobdescription: "",
    department: "",
    JobLocation: "",
    qulification: "",
    experience: "",
    time: "",
    JobPurpose: "",
    JobResponsibility: "",
    Requirement: "",
    Skills: "",
    Preference: "",
  });

  async function editAllData(id) {
    try {
      const response = await fetch(`https://www.skilancersolar.com:4000/get/${id}`);
      const data = await response.json();
      setEditData(data); // Populate modal with fetched data
    } catch (err) {
      console.log("Error fetching data by ID:", err);
    }
  }
// 
async function updateData(e) {
    e.preventDefault();
    console.log(editData)
    try {
      const response = await fetch(`https://www.skilancersolar.com:4000/update/${editData._id}`, {
        method: "PUT",
        body: JSON.stringify(editData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      alert(res.message);
      window.location.reload();
    } catch (err) {
      console.log("Error updating data:", err);
      alert("Failed to update data.");
    }
  }

  const handleEditChange = (e) => {
  const { name, value } = e.target;
  setEditData((prevData) => ({
    ...prevData,
    [name]: value, // Update the state dynamically based on the input name
  }));
};
  return (

    
    <>
    <>
 
  {/* Modal */}
  <div 
    className="modal fade"
    id="editModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" >
      <div className="modal-content" style={{width:"800px",marginRight:"200px" }} >
        <div className="modal-header" >
          <h1 className="modal-title fs-5" id="exampleModalLabel">
         { editData.jobdescription}
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body" style={{width:"800px",marginRight:"200px" }}>
        <form onSubmit={updateData}>
  <div className="d-flex justify-content-center mt-5" >
    <div style={{ width: "40%" }}>
      <label htmlFor="">Job Profile <b className="text-danger">*</b> </label>
      <input
        required
        type="text"
        name="jobdescription" // Add this name
        value={editData.jobdescription}
        placeholder="Job Description"
        onChange={handleEditChange} // Make sure this function works properly
      />

      <label htmlFor="">Function/Department <b className="text-danger">*</b> </label>
      <input
        required
        type="text"
        name="department" // Add this name
        value={editData.department}
        placeholder="Department"
        onChange={handleEditChange}
      />

      <label htmlFor="">Job Location <b className="text-danger">*</b> </label>
      <input
        required
        type="text"
        name="JobLocation" // Add this name
        value={editData.JobLocation}
        placeholder="Job Location"
        onChange={handleEditChange}
      />

      <label htmlFor="">Educational Qualification <b className="text-danger">*</b> </label>
      <input
        required
        type="text"
        name="qulification" // Add this name
        value={editData.qulification}
        placeholder="Educational Qualification"
        onChange={handleEditChange}
      />

      <label htmlFor="">Experience <b className="text-danger">*</b> </label>
      <input
        type="text"
        required
        name="experience" // Add this name
        value={editData.experience}
        placeholder="Experience"
        onChange={handleEditChange}
      />
    </div>

    <div className="ms-5" style={{ width: "50%" }}>
      <label htmlFor="">Job types <b className="text-danger">*</b> </label>
      <input
        type="text"
        required
        name="time" // Add this name
        value={editData.time}
        placeholder="Full Time, Part Time, Internship"
        onChange={handleEditChange}
      />

      <label htmlFor="">Job Purpose <b className="text-danger">*</b> </label><br />
      <textarea
        className="mt-2"
        style={{ width: "100%", backgroundColor: "#EEEEEE", border: "None" }}
        name="JobPurpose" // Add this name
        value={editData.JobPurpose}
        onChange={handleEditChange}
      />

      <label htmlFor="">Job Responsibility <b className="text-danger">*</b> </label>
      <textarea
        className="mt-2"
        style={{ width: "100%", backgroundColor: "#EEEEEE", border: "None" }}
        name="JobResponsibility" // Add this name
        value={editData.JobResponsibility}
        onChange={handleEditChange}
      />

      <label htmlFor="">Requirement <b className="text-danger">*</b> </label>
      <textarea
        className="mt-2"
        style={{ width: "100%", backgroundColor: "#EEEEEE", border: "None" }}
        name="Requirement" // Add this name
        value={editData.Requirement}
        onChange={handleEditChange}
      />

      <label htmlFor="">Skills <b className="text-danger">*</b> </label>
      <textarea
        className="mt-2"
        style={{ width: "100%", backgroundColor: "#EEEEEE", border: "None" }}
        name="Skills" // Add this name
        value={editData.Skills}
        onChange={handleEditChange}
      />
    </div>
  </div>
  <button className="btn btn-outline-primary mb-2" type="submit">Update</button>
</form>

        </div>
       </div>
    </div>
  </div>
</>

    {/*  */}
           <div className=" mt-5"  >
           <button className="btn btn-danger" style={{marginTop:"50px",marginLeft:"80%"}} onClick={logOut}>Logout</button>
        <form onSubmit={submit}>
<div className="d-flex justify-content-center  mt-5" style={{marginLeft:"150px"}} >
<div style={{width:"40%"}}>
          <label htmlFor="">Job Profile <b className="text-danger">*</b> </label>
          <input
                    required={true}
            type="text"
            value={data.jobdescription}
            placeholder="Job Description"
            onChange={(e) =>
              setData({ ...data, jobdescription: e.target.value })
            }
          />
        
          <label htmlFor="">Function/Department  <b className="text-danger">*</b> </label>
          <input
          required={true}
            type="text"
            value={data.department}
            placeholder="Department"
            onChange={(e) =>
              setData({ ...data, department: e.target.value })
            }
          />
          <label htmlFor="">Job Location  <b className="text-danger">*</b> </label>
          <input
                    required={true}
            type="text"
            value={data.JobLocation}
            placeholder="Job Location"
            onChange={(e) =>
              setData({ ...data, JobLocation: e.target.value })
            }
          />
          <label htmlFor="">Educational Qualification  <b className="text-danger">*</b> </label>
          <input
                    required={true}
            type="text"
            value={data.qulification}
            placeholder="Educational Qualification"
            onChange={(e) =>
              setData({ ...data, qulification: e.target.value })
            }
          />
          <label htmlFor="">Experience  <b className="text-danger">*</b> </label>
          <input
            type="text"
            required={true}
            value={data.experience}
            placeholder="Experience"
            onChange={(e) =>
              setData({ ...data, experience: e.target.value })
            }
          />
          </div>
<div className="ms-5" style={{width:"50%"}}>
<label htmlFor="">Job types  <b className="text-danger">*</b>  </label>
          <input
            type="text"
            required={true}
            value={data.time}
            placeholder="Full Time, Part Time, Internship"
            onChange={(e) =>
              setData({ ...data, time: e.target.value })
            }
          />

<label htmlFor="">Job Purpose  <b className="text-danger">*</b> </label><br />
            <textarea  className="mt-2" style={{width:"100%",backgroundColor:"#EEEEEE",border:"None"}}
            
             value={data.JobPurpose}
            // placeholder="Job Purpose"
            onChange={(e) =>
              setData({ ...data, JobPurpose: e.target.value })
            } name="" id=""></textarea>
            
          <label htmlFor="">Job Responsibility  <b className="text-danger">*</b> </label>
          <textarea className="mt-2" style={{width:"100%",backgroundColor:"#EEEEEE",border:"None"}}
             value={data.JobResponsibility}
            // placeholder="Job Purpose"
            onChange={(e) =>
              setData({ ...data, JobResponsibility: e.target.value })
            } name="" id=""></textarea>
            
            <label htmlFor="">Requirement  <b className="text-danger">*</b> </label>
            <textarea className="mt-2" style={{width:"100%",backgroundColor:"#EEEEEE",border:"None"}}
             value={data.Requirement}
            // placeholder="Job Purpose"
            onChange={(e) =>
              setData({ ...data, Requirement: e.target.value })
            }></textarea>
            
         <label htmlFor="">Skills  <b className="text-danger">*</b> </label>
         <textarea className="mt-2" style={{width:"100%",backgroundColor:"#EEEEEE",border:"None"}}
             value={data.Skills}
            // placeholder="Job Purpose"
            onChange={(e) =>
              setData({ ...data, Skills: e.target.value })
            }></textarea>
          
        
        </div>
          </div>
          <button className="btn btn-outline-primary mb-2" type="submit">Submit</button>
        </form>
      </div>

      <br />
      {/*  */}
      <div className="card text-center " style={{backgroundColor:"skyblue"}} >
<h4 className="mt-2">Profiles Hosted</h4>
</div>

      <div style={{margin:'40px'}}>

        {printdata.map((e, index) => (
  <div  key={index}>
  <ul>

  <li><p className=""    style={{ cursor: "pointer",marginLeft:"10px" }}> {e.jobdescription}.. 
  {/* <button className="btn btn-danger" >Delete</button>  */}
   </p>
   <button
  onClick={() => deleteData({ _id: e._id, jobdescription: e.jobdescription })}
  type="button"
  className="btn btn-outline-danger ms-5"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal2"
>
  Remove job profile
</button>
  <button
                    className="btn btn-outline-primary ms-5"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    onClick={() => editAllData(e._id)}
                  >
                    Edit job profile
                  </button>

</li>
   </ul>
  </div>
))}
<>
 
 {/* Modal */}
 <div
   className="modal fade"
   id="exampleModal2"
   tabIndex={-1}
   aria-labelledby="exampleModalLabel"
   aria-hidden="true">

   <div className="modal-dialog">
     <div className="modal-content">
       <div className="modal-header">
         <h1 className="modal-title fs-5" id="exampleModalLabel">
          Job Profile : {deleteidprofile.jobdescription}
         </h1>
         <button
           type="button"
           className="btn-close"
           data-bs-dismiss="modal"
           aria-label="Close"
         />
       </div>
       <div className="modal-body">
        Do you want to delete profile ?
       </div>
       <div className="modal-footer">
         <button
           type="button"
           className="btn btn-secondary"
           data-bs-dismiss="modal">
           No
         </button>
      
         {/* <button type="button" onClick={()=>{deleteData(e._id)}}  className="btn btn-danger"> */}
         <button type="button" onClick={()=>{deleteid(deleteidprofile._id)}}  className="btn btn-danger">
        
           Yes
         </button>
       </div>
     </div>
   </div>
 </div>
</>
     
      </div>

    </>
  );
}

export default Adddatabase;
