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
import userService from "../Services/UserService";
import { useEffect } from "react";
import { useContext } from 'react';
import { MainContext } from './Projects';


const BoxContainer = styled.div`
position: relative;
width: 100%;
height: 100%;
background-color: #ffffffe6;
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
top: 0px;
background-color: #198754;
/* border-radius: 5px 5px 0px 0px; */
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 5px;
font-size: 14px;
`;


const AddNewEditModel = ({ modelHandle, setModelHandle, setChangeHandler }) => {
  const [records, setRecords] = useState({});
  const pageRefreshCall = useContext(MainContext);

  const fetchData = () => {
    userService
      .getFormDocs()
      .then((res) => {
        // console.log(res);
        setRecords(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(fetchData, []);

  //for project initate date
  const years=[];
  let startYear =2000;
  let endYear = new Date().getFullYear();
  for(let i=endYear;i>startYear;i--){
      years.push(i);
    }
 
    

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    console.log(data);
    userService.postDocs(data).then((res)=>{
      setModelHandle(false);
      toast.success('Added Successfully', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        });
        pageRefreshCall(Math.floor(Math.random() * 100000000000));
    }).catch((err)=>{
    })

  };

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
          <Box>
            <BoxHead>
              Add New Project
              <CloseIcon style={{ cursor: "pointer" }} onClick={handleClose} />
            </BoxHead>
            {/* Manage by booststrap Grid System  */}
            
            <Container fluid>
              <Form onSubmit={handleSubmit}>
                <Row className="mt-3">
                  <Col lg={12} md={12}>
                    <Form.Group
                      className="mb-3" controlId="examplseForm.ControlInput1" >
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}>Project Name*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        name="project"
                        required
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3}>
                    <Form.Group className="mb-3">
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        Concerned DG
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="concernDg"
                        required
                        size="sm"
                      >
                        {Object.keys(records).length === 0 ? false : <>
                          <option value="">None</option>
                          {
                            records.dg.map((val,index)=>(
                              <option value={val.Name} key={index}>{val.Name}</option>
                            ))
                          }
                        </>}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="mb-3">
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        Manager
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="manager"
                        size="sm"
                        required
                      >
                        {Object.keys(records).length === 0 ? false : <>
                          <option value="">None</option>
                          {
                            records.managers.map((val,index)=>(
                              <option value={val.Name} key={index}>{val.Name}</option>
                            ))
                          }
                        </>}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="mb-3">
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        PM/Coordinator
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        required
                        name="coordinator"
                        size="sm"
                      >
                        {Object.keys(records).length === 0 ? false : <>
                          <option value="">None</option>
                          {
                            records.coordinators.map((val,index)=>(
                              <option value={val.Name} key={index}>{val.Name}</option>
                            ))
                          }
                        </>}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4}>
                    <Form.Group className="mb-3">
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        Department
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        required
                        name="subDepartment"
                        size="sm">
                        {Object.keys(records).length === 0 ? false : <>
                          <option value="">None</option>
                          {
                            records.subDepartments.map((val,index)=>(
                              <option value={val.Name} key={index}>{val.Name}</option>
                            ))
                          }
                        </>
                        }
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="mb-3">
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        High Level Department
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        required
                        name="department"
                        size="sm"
                      >
                        {Object.keys(records).length === 0 ? false : <>
                          <option value="">None</option>
                          {
                            records.departments.map((val,index)=>(
                              <option value={val.Name} key={index}>{val.Name}</option>
                            ))
                          }
                        </> 
                        }
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="mb-3">
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        NDP / PC-1
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="ndp"
                        required
                        size="sm"
                      >
                        {Object.keys(records).length === 0 ? false : <>
                          <option value="">None</option>
                          {
                            records.ndp.map((val,index)=>(
                              <option value={val.Name} key={index}>{val.Name}</option>
                            ))
                          }
                        </>
                        }
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <Form.Group className="mb-3">
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        Region
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="region"
                        required
                        size="sm"
                      >
                        {Object.keys(records).length === 0 ? false : <>
                          <option value="">None</option>
                          {
                            records.regions.map((val,index)=>(
                              <option value={val.Name} key={index}>{val.Name}</option>
                            ))
                          }
                          </>
                        }
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3">
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        Technology
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="technology"
                        required
                        size="sm"
                      >
                        {Object.keys(records).length === 0 ? false : <>
                          <option value="">None</option>
                          {
                            records.technologies.map((val,index)=>(
                              <option value={val.Name} key={index}>{val.Name}</option>
                            ))
                          }
                          </>
                        }
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <Form.Group className="mb-3">
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        Status
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        required
                        name="status"
                        size="sm"
                      >
                       {Object.keys(records).length === 0 ? false : <>
                          <option value="">None</option>
                          {
                            records.status.map((val,index)=>(
                              <option value={val.Name} key={index}>{val.Name}</option>
                            ))
                          }
                          </>
                        }
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        project initiation Date
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="date"
                        required
                        size="sm"
                      >
                        <option value="">None</option>
                        {
                          years.map((value,index)=>(
                            <option value={value} key={index}>{value}</option>
                          ))
                        }  
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="examplseForm.ControlInput1"
                    >
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        Url
                      </Form.Label>
                      <Form.Control
                        type="url"
                        placeholder=""
                        name="url"
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={8}>
                    <Form.Group
                      className="mb-3"
                      controlId="examplseForm.ControlInput1"
                    >
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        Resources Working on Active
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        name="Resources"
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group
                      className="mb-3"
                      controlId="examplseForm.ControlInput1"
                    >
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        Team
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="team"
                        required
                        size="sm"
                      >
                        {Object.keys(records).length === 0 ? false : <>
                          <option value="">None</option>
                          {
                            records.teams.map((val,index)=>(
                              <option value={val.Name} key={index}>{val.Name}</option>
                            ))
                          }
                          </>
                        }
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4}>
                    <Form.Group className="mb-3">
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        Techinical Lead (Web)
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="techLeadWeb"
                        size="sm"
                      >
                        {Object.keys(records).length === 0 ? false : <>
                          <option value="">None</option>
                          {
                            records.developers.map((val,index)=>(
                              <option value={val.Name} key={index}>{val.Name}</option>
                            ))
                          }
                          </>
                        }
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="mb-3">
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        Techinical Lead (Android)
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="techLeadAndroid"
                        size="sm"
                      >
                        {Object.keys(records).length === 0 ? false : <>
                          <option value="">None</option>
                          {
                            records.developers.map((val,index)=>(
                              <option value={val.Name} key={index}>{val.Name}</option>
                            ))
                          }
                          </>
                        }
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group
                      className="mb-3"
                      controlId="examplseForm.ControlInput1"
                    >
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        GITLAB ID
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder=""
                        name="gitLabId"
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="examplseForm.ControlInput1"
                    >
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        Android Repo.on Git
                      </Form.Label>
                      <Form.Control
                        type="url"
                        placeholder=""
                        name="androidRepo"
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="examplseForm.ControlInput1"
                    >
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        iOS Repo.on Git
                      </Form.Label>
                      <Form.Control
                        type="url"
                        placeholder=""
                        name="iOsRepo"
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="examplseForm.ControlInput1"
                    >
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        Web Repo.on Git
                      </Form.Label>
                      <Form.Control
                        type="url"
                        placeholder=""
                        name="webRepo"
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="examplseForm.ControlInput1"
                    >
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        Continuous Development
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        name="continousDev"
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="examplseForm.ControlInput1"
                    >
                      <Form.Label
                        className="mb-1"
                        style={{ fontStyle: "italic", fontSize: "14px" }}
                      >
                        Continuous Integration
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        name="continousInt"
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={10}></Col>
                  <Col lg={1}></Col>
                  <Col lg={1}>
                    <Button
                      variant="success"
                      type="submit"
                      size="sm"
                      className="mb-3"
                    >
                      Submit
                    </Button>
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

export default AddNewEditModel;
