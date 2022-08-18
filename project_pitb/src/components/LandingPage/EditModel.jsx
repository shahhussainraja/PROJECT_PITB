import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';

const EditModel = ({ modelHandle , setModelHandle , course , setChangeHandler }) => {

    const [courseName,setCourseName] =React.useState(course.courseName); 
    const [instructorName,setInstructorName] =React.useState(course.instructorName); 
    const [link,setLink] =React.useState(course.link); 
    const [description,setDescription] =React.useState(course.description); 

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "500px",
        height:"420px" ,
        bgcolor: 'background.paper',
        border: '2px solid #2d5b67',
        borderTop:"40px solid #224e59",
        pt: 2,
        px: 4,
        pb: 3,
      };

        const handleClose = () => {
          setModelHandle(false);
        };
      
    return ( 
      <>
      <div style={{transition:"0.5 ease-in-out"}}>
      <Modal
        hideBackdrop
        open={modelHandle}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style}}>

        <h1>data will come  here </h1>


        <div style={{marginTop:"20px"}}>
        {/* <Button variant="contained" color="success" onClick={()=>{
          console.log("submit buttons hits");
          userService.updateCourse(course._id, {courseName,instructorName,description,link}).then((res)=>{
            console.log(res);
            toast.success("updated Successfully", {
            position: toast.POSITION.TOP_CENTER});
            setChangeHandler(Math.floor(Math.random() * 1111111111111111));
            setModelHandle(false);
          }).catch((err)=>{
            console.log(err.message);
            toast.error("Error Failed to Update!", {
              position: toast.POSITION.TOP_CENTER
            });
          })  
        }} >Submit</Button> */}
        <Button variant="contained" onClick={handleClose} >Close</Button>
      </div> 
        </Box>
      </Modal>  
    

      </div>
        </>
     );
}
 
export default EditModel;



