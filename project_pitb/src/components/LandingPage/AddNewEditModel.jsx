import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';  
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components"

const AddNewEditModel = ({ modelHandle , setModelHandle , setChangeHandler }) => {

  const BoxHead = styled.div`
      padding: 0px;
      margin: 0px;
      height: 40px;
      color: white;
      background-color: #006b00;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left:5px
  `


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "400px",
        height:"420px" ,
        bgcolor: 'background.paper',
        border: '.1px solid green  ',
        // borderTop:"40px solid #2d5b67",
        margin:"0px",
        padding:"0px"
        // pt: 0,
        // px: 4,
        // pb: 3,
      };

        const handleClose = () => {
          setModelHandle(false);
        };
      
    return ( 
      <>
      <div style={{}}>
      <Modal
        hideBackdrop
        open={modelHandle}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style}}>
        <BoxHead>
          Update Team Member
          <CloseIcon style={{cursor:"pointer"}} onClick={handleClose} />
        </BoxHead>
        <div style={{marginTop:"20px"}}>
        <Button variant="contained" color="success"  size='small' onClick={()=>{
          console.log("submit buttons hits");
          // userService.postCourse({courseName,instructorName,description,link}).then((res)=>{
          //   toast.success("updated Successfully", {
          //   position: toast.POSITION.TOP_CENTER});
          //   setChangeHandler(Math.floor(Math.random() * 1111111111111111));
          //   setModelHandle(false);
          // }).catch((err)=>{
          //   if(err.response.status == 400){
          //   toast.error(err.response.data, {
          //     position: toast.POSITION.TOP_CENTER
          //   });
          //  }
          // })  
        }}  style={{backgroundColor:"#2d5b67"}}>Submit</Button>
        <Button variant="contained" size="small" onClick={handleClose} >Close</Button>
        </div>
        </Box>
      </Modal>  
      </div>
        </>
     );
}
 
export default AddNewEditModel;



