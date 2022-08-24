import Button from "@mui/material/Button";
import React from "react";
import "./App.css"
import Login from "./components/LoginPage/Login";
import Projects from "./components/LandingPage/Projects";
import userService from "./components/Services/UserService";
import authServices from "./components/Services/AuthServices";
import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";
import Spinner from 'react-spinkit';
 
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import MetaData from "./components/MetaData/MetaData";
import TableComponent from "./components/MetaData/DynamicComponents/TableComponent";

const Container = styled.div`
  height: 50px;
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
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: white;
  font-size: 20px;
  font-weight: bolder;
  margin: 5px;
`;


const app = () => {
  return (  
    <>
        <div className={'loadinganim'} id="#interceptor">
            <Spinner name="line-scale-pulse-out-rapid" color="steelblue" style={{color:"#3286cc",marginTop:'25%',left:'50%',position:'absolute',zIndex:'99999',opacity: 2}} />
        </div> 
          <BrowserRouter>
            {authServices.isLogged() ? (
              <>
                <Container>
                  <Wrapper>
                    <Left>
                      <img
                        style={{ height: "35px" }}
                        src={require("./logo.png")}
                        alt=""
                      />
                      <Text> SE Docs</Text>
                    </Left>
                    <Right>
                      <LogoutIcon style={{color: "white" }} />
                      <Link
                        to=""
                        style={{ color: "inherit", textDecoration: "inherit" }}
                      >
                        <Button
                          color="inherit"
                          style={{ fontSize:"small", color: "white" }}
                          onClick={(e) => {
                            authServices.logOut();
                          }}
                        >
                          LogOut
                        </Button>
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
                </Container>
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
              </Route>
            </Routes>
          </BrowserRouter>

          {/* {authServices.isLogged() ? <LandPage /> : <Login />} */}
    </>
  );
};
export default app;
