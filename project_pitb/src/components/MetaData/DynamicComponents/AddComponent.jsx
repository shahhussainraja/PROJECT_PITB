import * as React from "react";
import Modal from "@mui/material/Modal"; 
import { useState ,useContext } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { DetailContext } from "./TableComponent";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function AddComponent() {

  const model = useContext(DetailContext);
  
  const BoxContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #ebebeb;
  `;

  const Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 40%;
    background-color: #f8f8f8;
    border: 1px solid #b2b2b2;
    border-radius: 5px;
    margin: 0px;
    padding: 0px;
  `;

    const BoxHead = styled.div`
    padding: 0px;
    margin: 0px;
    height: 30px;
    color: white;
    position: sticky;
    top:0px;
    background-color: #198754;
    /* border-radius: 5px 5px 0px 0px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    font-size: 14px;
    `;

  const handleSubmit =(event)=>{
    event.preventDefault();
    console.log("submit hits");
    const formData = new FormData(event.currentTarget);
    console.log({
      title:formData.get("project"),
      manager:formData.get("manager"),
      date:formData.get("date")
    });
  }

  const handleClose = () => {
    model.setOpenModel(false);
  };

  return (
    <>
    <Modal
    hideBackdrop
    open={model.openModel}
    onClose={handleClose}
    aria-labelledby="child-modal-title"
    aria-describedby="child-modal-description"
  >
    <BoxContainer>
      <Box >
        <BoxHead>
          Add 
          <CloseIcon style={{ cursor: "pointer" }} onClick={handleClose} />
        </BoxHead>
        {/* Manage by booststrap Grid System  */}
        <Container fluid >
          <Form onSubmit={handleSubmit}>
            <Row className="mt-3">
              <Col lg={12} md={12}>
                <Form.Group  className="mb-3"controlId="examplseForm.ControlInput1">
                  <Form.Label className="mb-1" style={{fontStyle:"italic" ,fontSize:"14px"}} >Project Name*</Form.Label>
                  <Form.Control type="text" placeholder="" name='project' required size="sm"  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      </Box>

      {
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
      }
    </BoxContainer>
  </Modal>
  </>
  )
}

export default AddComponent;