import Button from "@mui/material/Button";
import React from "react";
import Login from "./components/LoginPage/Login";
import LandPage from "./components/LandingPage/LandPage";
import userService from "./components/Services/UserService";
import authServices from "./components/Services/AuthServices";
import styled from "styled-components";
import LogoutIcon from '@mui/icons-material/Logout';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

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
flex: 2;
align-items: center;
`;

const Right = styled.div`
display: flex;
flex-direction: row-reverse;
flex: 1 ;
align-items: center;
`;

const Text = styled.h1`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: white;
  font-size: 20px;
  font-weight: bolder;
  margin: 5px;
`


const app = () => {
  return (
    <>
      <BrowserRouter>   
    {authServices.isLogged() ? <>
      <Container>
          <Wrapper>
              <Left>
              <img style={{height:"35px"}} src={require('./logo.png')} alt="" />
                <Text> SE Docs</Text>
              </Left>
              <Right>
                <LogoutIcon  style={{fontWeight:"",color:"white"}}/>
                <Link to='' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Button color="inherit" style={{fontWeight:"",color:"white"}} onClick={(e)=>{
                  authServices.logOut();
                }}>LogOut</Button>
                </Link>
              </Right>
          </Wrapper>
        </Container>
    </> :
    false }
        
      <Routes>
        <Route path="/" element={authServices.isLogged() ? <LandPage /> : <Navigate to="/Login" /> } />
        <Route path="/Login" element={ <Login />} />
      </Routes>


      </BrowserRouter>

      {/* {authServices.isLogged() ? <LandPage /> : <Login />} */}
    </>
  );
};
export default app;
