import Button from '@mui/material/Button'
import React from 'react';
import Login from './components/LoginPage/Login';
import LandPage from './components/LandingPage/LandPage';
import userService from './components/Services/UserService';
import authServices from './components/Services/AuthServices';
const app = () => {
  return ( 
    <>  
      {
        authServices.isLogged() ? <LandPage /> : (
          <Login />
        )

      }









    </>
   );
}
export default app;
