import Button from "@mui/material/Button";
import React from "react";
import "./App.css"
import Login from "./components/LoginPage/Login";
import Projects from "./components/LandingPage/Projects";
import authServices from "./components/Services/AuthServices";
import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";
import Spinner from 'react-spinkit';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import MetaData from "./components/MetaData/MetaData";
import TableComponent from "./components/MetaData/DynamicComponents/TableComponent";
import { height } from "@mui/system";
import SubDepartmentTable from "./components/MetaData/SubDepartments/SubDepartmentTable";


const Container = styled.div`
height: 100%;
background-color: ghostwhite;

`

const NavBarContainer = styled.div`

  position:sticky;
  top:0px;
  z-index: 10;
  height: 50px;
  /* background-color: #f7ad62; */
  /* background-color: #a6d1e1; */
  /* background-color: #f8b05b; */
  /* background-color:#62bcd6; */
  /* background-color:#f7a969; */
   background-color: #25506f;

 
`;

const Wrapper = styled.div`
  display: flex;
  padding: 10px 10px;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
 
`;

const Right = styled.div`

  display: flex;
  flex-direction: row-reverse;
  flex: 1;
  align-items: center;
`;

const Text = styled.h1`
  font-family: 'Lato', sans-serif; 
  color: white;
  font-weight: bolder ;
  font-size: 22px;
  margin: 5px;
`;


const app = () => {
  return (  
    <>
    <Container>
    <ToastContainer position="top-right" autoClose={5000}  closeOnClick theme="colored" transition={Slide} style={{zIndex:99999999999999}}  />
        <div className={'loadinganim'} id="#interceptor">
            <Spinner name="line-scale-pulse-out-rapid" color="steelblue" style={{color:"#3286cc",marginTop:'25%',left:'50%',position:'absolute',zIndex:'99999',opacity: 2}} />
        </div> 
          <BrowserRouter>
            {authServices.isLogged() ? (
              <>
                <NavBarContainer>
                  <Wrapper>
                    <Left>
                      <img
                        style={{ height: "35px" }}
                        src={require("./logo.png")}
                        alt=""
                      />
                      <Text> SE  Docs</Text>
                    </Left>
                    <Right>
                      <Link
                        to=""
                        style={{ color: "inherit", textDecoration: "inherit",marginLeft:"20px"}}
                      ><LogoutIcon style={{color: "white" }} onClick={(e) => {
                        authServices.logOut();
                      }} />
                      </Link>
                      <Link
                        to="/MetaData"
                        style={{ color: "inherit", textDecoration: "inherit" }}
                      >
                        <Button
                          color="inherit"
                          style={{ fontSize:"small", color: "white" }}
                        >
                          Meta Data
                        </Button>
                      </Link>
                      <Link
                        to="/Projects"
                        style={{ color: "inherit", textDecoration: "inherit" }}
                      >
                        <Button
                          color="inherit"
                          style={{ fontSize:"small", color: "white" }}
                        >
                          Projects
                        </Button>
                      </Link>
                      <Link
                        to="/"
                        style={{ color: "inherit", textDecoration: "inherit" }}
                      >
                        <Button
                          color="inherit"
                          style={{ fontSize:"small", color: "white" }}
                        >
                          Dashboard
                        </Button>
                      </Link>
                      
                    </Right>
                  </Wrapper>
                </NavBarContainer>
              </>
            ) : (
              false
            )}

            <Routes>
              <Route path="/" element={authServices.isLogged()? <Dashboard /> : <Navigate to="/login" /> } />
              <Route path="/login" element={<Login />} />
              <Route path="/projects" element={authServices.isLogged()? <Projects /> : <Navigate to="/login" /> } />
              {/* <Route path="/MetaData" element={authServices.isLogged()? <MetaData/> : <Navigate to="/login" /> }></Route> */}
              <Route path="MetaData" element={<MetaData />}>
                <Route index  element={<TableComponent route={"dg"} />} />
                <Route  path="DGs" element={<TableComponent route={"dg"} />} />
                <Route  path="Managers" element={<TableComponent route={"managers"} />} />
                <Route  path="PM/Coordinator" element={<TableComponent route={"coordinators"} />} />
                <Route  path="Developers" element={<TableComponent route={"developers"} />} />
                <Route  path="Departments" element={<TableComponent route={"departments"} />} />
                <Route  path="subDepartments" element={<SubDepartmentTable route={"subDepartments"} />} />
                <Route  path="Technologies" element={<TableComponent route={"technologies"} />} />
                <Route  path="NDP-PC" element={<TableComponent route={"ndp"} />} />
                <Route  path="Teams" element={<TableComponent route={"teams"} />} />
                <Route  path="Regions" element={<TableComponent route={"regions"} />} />
                <Route  path="Status" element={<TableComponent route={"status"} />} />
              </Route>
            </Routes>
          </BrowserRouter>

          {/* {authServices.isLogged() ? <LandPage /> : <Login />} */}
        </Container>
    </>
  );
};
export default app;
