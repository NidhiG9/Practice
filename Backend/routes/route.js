import express from 'express'
import { addformdata,getalldata,getalldataByID,deleteDataById,updatedata} from '../functions/function.js';
const router=express.Router();

router.post('/post',addformdata);
router.get('/get',getalldata);
router.get('/get/:id',getalldataByID);
router.delete('/deletedata/:id',deleteDataById);
router.put('/update/:id',updatedata);




export default router