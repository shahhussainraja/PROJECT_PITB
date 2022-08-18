import React from 'react';
import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import "./Style.css"
import authServices from '../Services/AuthServices';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

const Login  = () => {
  let navigate = useNavigate();
  
  const [errStyle, setErrStyle] = useState({
    marginTop:"0px",
    marginBottom:"0px",
    paddingTop:"0px",
    paddingBottom:"0px",
    color:"red",
    display:"none",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget); 
    authServices.login(data.get('email'),data.get('password')).then((res)=>{
      navigate("/");
      window.location.reload();
      

    }).catch((err)=>{
      console.log(err.response.data);
      if(err.response.data === false){
        setErrStyle({
          display:"block",
          color:"red"
        })
      }
    })
    
  };
    return ( 
        <>
       <Grid container component="main" sx={{ height: '100vh' ,paddingTop:"1rem"}}>
        <Grid 
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >

        <motion.div  
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.8,
           delay: 0.5,
           ease: [0, 0.71, 0.2, 1.01]
         }}
        >
        <img className='logo' src={require('../../logo.png')} alt="" />
        </motion.div>
       
        </Grid>  
        
        <Grid item xs={12} sm={8} md={5} component={Paper} sx={{
        }} elevation={6} square >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, backgroundColor:"#295c98" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                size="small"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                
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
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 1, mb: 2  ,':hover': {
                  bgcolor: '#295c98', // theme.palette.primary.main
                  color: 'white',
                }}}
              >
                Sign In
              </Button>
            </Box>
            <span style={errStyle}>Invalid Email/password</span>  
          </Box>
          
        </Grid>
      </Grid> 
    </>
     );
}
 
export default Login ;

