import addData from "../schema/schema.js"
const addformdata = async (req, res) => {
    try {
      const { jobdescription,position, department, JobLocation, qulification, experience, time, JobPurpose, JobResponsibility, Requirement, Skills, Preference } = req.body;
  
      const datasave = new addData({
        jobdescription,
 
        position,
        department,
        JobLocation,
        qulification,
        experience,
        time,
        JobPurpose,
        JobResponsibility,
        Requirement,
        Skills,
        Preference
      });
  
      const data = await datasave.save();
      res.send({ message: "sent successfully" });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).send({ message: "Failed to save data" });
    }
  }
  
// find all

const getalldata=async(req,res)=>{
    const alldata =await addData.find()
    res.send(alldata)
}
// find by id
const getalldataByID = async (req, res) => {
    try {
        const id = req.params.id; // Extract 'id' from req.params
    
        const alldata = await addData.findById(id); // Pass the id directly to findById
        if (!alldata) {
            return res.status(404).send({ message: "Data not found" });
        }
        res.send(alldata);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving data", error });
    }
};

// find by id And Delete
const deleteDataById = async (req, res) => {
    try {
        const id = req.params.id; // Extract 'id' from req.params
        console.log("deleteid",id)
        const alldata = await addData.findByIdAndDelete(id); // Pass the id directly to findById
        if (alldata) {
            return res.status(200).send({ message: "Delete successfully" });
        }
        res.send(alldata);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving data", error });
    }
};

// update//
const updatedata = async (req, res) => {
    try {
      const updateData = await addData.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      if (updateData) {
        return res.status(200).send({ message: 'Updated Successfully' });
      }
    } catch (error) {
      console.log("Error updating data:", error);
      res.status(500).send({ message: 'Error updating data' });
    }
  };

export {addformdata,getalldata,getalldataByID,deleteDataById,updatedata}
