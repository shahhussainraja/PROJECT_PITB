import Button from "@mui/material/Button";
import React from "react";
import Login from "./components/LoginPage/Login";
import LandPage from "./components/LandingPage/LandPage";
import userService from "./components/Services/UserService";
import authServices from "./components/Services/AuthServices";
import styled from "styled-components";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import DumPage from "./components/dumpage/DumPage";



const Container = styled.div`
  height: 50px;
  background-color: #e2e2e2;
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
  font-size: 16px;
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
              <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link>
              </Left>
              <Right>
                <Link to='/Login' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Button color="inherit" style={{fontWeight:"bolder"}}>LogIn</Button>
                </Link>
              </Right>
          </Wrapper>
        </Container>
    </> :
    true }
        
      <Routes>
        <Route path="/" element={authServices.isLogged() ? <LandPage /> : <Navigate to="/Login" /> } />
        {console.log(authServices.isLogged())}
        <Route path="/home" element={ <DumPage />  } />
        <Route path="/Login" element={ <Login />} />
      </Routes>


      </BrowserRouter>

      {/* {authServices.isLogged() ? <LandPage /> : <Login />} */}
    </>
  );
};
export default app;
