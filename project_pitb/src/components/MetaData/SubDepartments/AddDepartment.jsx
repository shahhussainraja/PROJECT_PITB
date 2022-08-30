import * as React from "react";
import Modal from "@mui/material/Modal"; 
import { useState ,useContext ,useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import userService from "../../Services/UserService";
import { MainContext } from "./SubDepartmentTable";

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
width: 40%;
height: 45%;
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


function AddDepartment() {

  const model = useContext(MainContext);
  const [records, setRecords] = useState({});
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

  
  const handleSubmit =(event)=>{
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    userService.postDynamic(model.route,{Name:formData.get("Name"),departmentId:formData.get("department")}).then((res)=>{
      handleClose();
      toast.success('Added Successfully', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        });
        model.setChangeHandler(Math.floor(Math.random() * 100000000000));
    }).catch((e)=>{
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
                <Form.Group>
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
                              <option value={val.id} key={index}>{val.Name}</option>
                            ))
                          }
                        </> 
                        }
                      </Form.Select>
                    </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={12}  className="mb-3">
                <Form.Group  className="mb-3"controlId="examplseForm.ControlInput1">
                  <Form.Label className="mb-1" style={{fontStyle:"italic" ,fontSize:"14px"}}>Name*</Form.Label>
                  <Form.Control type="text" placeholder="" name='Name' required size="sm"  />
                </Form.Group>
                </Col>
            </Row>  
            <Row>
               <Col lg={12}>
                    <Button variant="success" type="submit" size="sm" className="mt-0">
                      submit
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
  )
}

export default AddDepartment;