import * as React from "react";
import Modal from "@mui/material/Modal"; 
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const EditModel = ({ modelHandle, setModelHandle, setChangeHandler  , data}) => {


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
    width: 80%;
    height: 98%;
    background-color: #f8f8f8;
    border: 1px solid #b2b2b2;
    border-radius: 5px;
    margin: 0px;
    padding: 0px;
    overflow-y: scroll;
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
    setModelHandle(false);
  };

  return (
    <>
      <Modal
        hideBackdrop
        open={modelHandle}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <BoxContainer>
          <Box >
            <BoxHead>
              Update Project
              <CloseIcon style={{ cursor: "pointer" }} onClick={handleClose} />
            </BoxHead>
            {/* Manage by booststrap Grid System  */}
            <Container fluid >
              <Form onSubmit={handleSubmit}>
                <Row className="mt-3">
                  <Col lg={12} md={12}>
                    <Form.Group  className="mb-3"controlId="examplseForm.ControlInput1">
                      <Form.Label className="mb-1" style={{fontStyle:"italic" ,fontSize:"14px"}} >Project Name*</Form.Label>
                      <Form.Control type="text" placeholder="" name='project' required size="sm" value={data.Projects} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3}>
                  <Form.Group className="mb-3">
                        <Form.Label className="mb-1"  style={{fontStyle:"italic",fontSize:"14px"}}>Concerned DG</Form.Label>
                        <Form.Select aria-label="Default select example" name="concernDg"  required size="sm">
                          <option value="">None</option>
                          <option value="1">Ministry of Religious Affairs and Interfaith Harmony </option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="mb-3" >
                      <Form.Label className="mb-1"  style={{fontStyle:"italic",fontSize:"14px"}}>Manager</Form.Label>
                      <Form.Select aria-label="Default select example" name="manager"  size="sm"  required>
                        <option value="">None</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                  <Form.Group className="mb-3">
                      <Form.Label className="mb-1"  style={{fontStyle:"italic",fontSize:"14px"}}>PM/Cordinator</Form.Label>
                      <Form.Select aria-label="Default select example" required name="cordinator" size="sm">
                        <option value="">None</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4}>
                  <Form.Group className="mb-3">
                      <Form.Label className="mb-1"  style={{fontStyle:"italic",fontSize:"14px"}}>Department</Form.Label>
                      <Form.Select aria-label="Default select example" required name='department' size="sm">
                        <option value="">None</option>
                        <option value="1">one</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label className="mb-1"  style={{fontStyle:"italic",fontSize:"14px"}}>High Level Department</Form.Label>
                        <Form.Select aria-label="Default select example" required name="higherDept" size="sm">
                          <option value="">None</option>
                          <option value="1">Ministry of Religious Affairs and Interfaith Harmony </option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                  </Col>
                <Col lg={4}>
                  <Form.Group className="mb-3">
                        <Form.Label className="mb-1"  style={{fontStyle:"italic",fontSize:"14px"}}>NDP / PC-1</Form.Label>
                        <Form.Select aria-label="Default select example" name="ndp" required size="sm">
                          <option value="">None</option>
                          <option value="1">Ministry of Religious Affairs and Interfaith Harmony </option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                  </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label className="mb-1"  style={{fontStyle:"italic",fontSize:"14px"}}>Region</Form.Label>
                        <Form.Select aria-label="Default select example" name="region" required size="sm">
                           <option value="">None</option>
                          <option value="1">Ministry of Religious Affairs and Interfaith Harmony </option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label className="mb-1"  style={{fontStyle:"italic",fontSize:"14px"}}>Technology</Form.Label>
                        <Form.Select aria-label="Default select example" name="technology" required size="sm">
                          <option value="">None</option>
                          <option value="1">Ministry of Religious Affairs and Interfaith Harmony </option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                </Row>
                <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                      <Form.Label className="mb-1"  style={{fontStyle:"italic",fontSize:"14px"}}>Status</Form.Label>
                      <Form.Select aria-label="Default select example"  required name="status" size="sm">
                        <option value="">None</option>
                        <option value="1">Live & Continuous Development</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={12}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                      <Form.Label className="mb-1"  style={{fontStyle:"italic",fontSize:"14px"}} >Date</Form.Label>
                      <Form.Control type="date" name="date" size="sm" required/>
                    </Form.Group>
                  </Col>
                </Row>  
                <Row>
                  <Col lg={12}>
                    <Form.Group  className="mb-3"controlId="examplseForm.ControlInput1">
                      <Form.Label className="mb-1" style={{fontStyle:"italic" ,fontSize:"14px"}} >Url</Form.Label>
                      <Form.Control type="url" placeholder="" name="url"  size="sm"/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3}>
                    <Form.Group  className="mb-3"controlId="examplseForm.ControlInput1">
                      <Form.Label className="mb-1" style={{fontStyle:"italic" ,fontSize:"14px"}} >Total Resources Working on Active</Form.Label>
                      <Form.Control type="number" placeholder="" name="totalResources"   size="sm"/>
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group  className="mb-3"controlId="examplseForm.ControlInput1">
                      <Form.Label className="mb-1" style={{fontStyle:"italic" ,fontSize:"14px"}} >Resources Working on Active Projects</Form.Label>
                      <Form.Control type="text" placeholder=""  name="totalResourcesWorking"  size="sm"/>
                    </Form.Group>
                  </Col>
                </Row>
              <Row>
              <Col lg={4}>
                  <Form.Group className="mb-3">
                        <Form.Label className="mb-1"  style={{fontStyle:"italic",fontSize:"14px"}}>Techinical Lead (Web)</Form.Label>
                        <Form.Select aria-label="Default select example" name="techLeadWeb" size="sm">
                          <option>Open this select menu</option>
                          <option value="1">Ministry of Religious Affairs and Interfaith Harmony </option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                  </Col>
                  <Col lg={4}>
                  <Form.Group className="mb-3">
                        <Form.Label className="mb-1"  style={{fontStyle:"italic",fontSize:"14px"}}>Techinical Lead (Android)</Form.Label>
                        <Form.Select aria-label="Default select example" name="techLeadAndroid"  size="sm">
                          <option>Open this select menu</option>
                          <option value="1">Ministry of Religious Affairs and Interfaith Harmony </option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                  </Col>
                  <Col lg={4}>
                  <Form.Group  className="mb-3"controlId="examplseForm.ControlInput1">
                      <Form.Label className="mb-1" style={{fontStyle:"italic" ,fontSize:"14px"}} >GITLAB ID</Form.Label>
                      <Form.Control type="number" placeholder="" name="gitLabId"  size="sm"/>
                    </Form.Group>
                  </Col>
              </Row>
              <Row>
                <Col lg={12}>
                    <Form.Group  className="mb-3"controlId="examplseForm.ControlInput1">
                      <Form.Label className="mb-1" style={{fontStyle:"italic" ,fontSize:"14px"}} >Android Repo.on Git</Form.Label>
                      <Form.Control type="url" placeholder="" name="androidRepo"  size="sm"/>
                    </Form.Group>
                </Col>
               </Row> 
               <Row>
                <Col lg={12}>
                    <Form.Group  className="mb-3"controlId="examplseForm.ControlInput1">
                      <Form.Label className="mb-1" style={{fontStyle:"italic" ,fontSize:"14px"}} >iOS Repo.on Git</Form.Label>
                      <Form.Control type="url" placeholder=""  name="iOsRepo"  size="sm"/>
                    </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                   <Form.Group  className="mb-3"controlId="examplseForm.ControlInput1">
                      <Form.Label className="mb-1" style={{fontStyle:"italic" ,fontSize:"14px"}} >Web Repo.on Git</Form.Label>
                      <Form.Control type="url" placeholder="" name="webRepo"  size="sm"/>
                    </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                    <Form.Group  className="mb-3"controlId="examplseForm.ControlInput1">
                      <Form.Label className="mb-1" style={{fontStyle:"italic" ,fontSize:"14px"}} >Continuous Development</Form.Label>
                      <Form.Control type="text" placeholder="" name="continousDev"  size="sm"/>
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group  className="mb-3"controlId="examplseForm.ControlInput1">
                      <Form.Label className="mb-1" style={{fontStyle:"italic" ,fontSize:"14px"}} >Continuous Integration</Form.Label>
                      <Form.Control type="text" placeholder="" name="continousInt"    size="sm"/>
                    </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={10}></Col>
                <Col lg={1}></Col>
                <Col lg={1}>
                <Button variant="success" type="submit" size="sm" className="mb-3"  >Submit</Button>
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
  );
};

export default EditModel;
