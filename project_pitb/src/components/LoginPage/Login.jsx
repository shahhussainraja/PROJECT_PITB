import React from 'react';
import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import "./Style.css"
import authServices from '../Services/AuthServices';
import { useState } from 'react';

const Login  = () => {
  
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
    console.log();
    authServices.login(data.get('email'),data.get('password')).then((res)=>{
      console.log(res.data);
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
       <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid  className='logo'
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                
              />
              <TextField
                margin="normal"
                required
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