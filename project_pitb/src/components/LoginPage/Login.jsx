import React from "react";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import "./Style.css";
import authServices from "../Services/AuthServices";
import { useState } from "react";
import { useEffect, Fragment } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components"

const Login = () => {
  let navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const BoxContainer = styled.div`
    background-color: blue;
    border:2px solid black;
    border-radius: 10px;
    height:"90vh";
    display: flex;
    align-items: center;
    justify-content: center;


  `
  const [errStyle, setErrStyle] = useState({
    marginTop: "0px",
    marginBottom: "0px",
    paddingTop: "0px",
    paddingBottom: "0px",
    color: "red",
    display: "none",
  });

  const handleSubmit = (event) => {
    authServices
      .login(email, password)
      .then((res) => {
        console.log("user logged");
      })
      .catch((err) => {
        if (err.response.data === false) {
          setErrStyle({
            display: "block",
            color: "red",
          });
        }
      });
  };

  return (
    <>
            <Container fluid >
              <Row style={{backgroundColor:"ghostWhite",height:"100vh"}}> 
                  <Col lg={6} style={{display:"flex",justifyContent:"center",alignItems:"center" }}>
                  <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}>
                        <img className="logo" src={require("../../logo.png")} alt="" />
                  </motion.div>
                  </Col>
        <Col lg={4} style={{display:"flex",justifyContent:"center",alignItems:"center" }} >        
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, backgroundColor: "#295c98" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  size="small"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e)=>{
                    setEmail(e.target.value);
                  }}
                />
                <TextField
                  size="small"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e)=>{
                    setPassword(e.target.value);
                  }}
                />

                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 1,
                    mb: 2,
                    ":hover": {
                      bgcolor: "#295c98", // theme.palette.primary.main
                      color: "white",
                    },
                  }}
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
              </Box>
              <span style={errStyle}>Invalid Email/password</span>
            </Box>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
             
    </>
  );
};

export default Login;
