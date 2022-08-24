import React from 'react'
import { BrowserRouter,Link, Outlet, Route, Router, Routes } from 'react-router-dom'
import styled from "styled-components"
import Button from "@mui/material/Button";
import ListGroup from 'react-bootstrap/ListGroup';
import "./MetaData.css"


const Container = styled.div`
display: flex;
padding-top:6px;
padding-left: 0px;
height: 100%;

`

const Left = styled.div`
padding-top: 10px;
font-size: 15px;
flex: 1;
display: flex;
flex-direction: column;
align-items: left;
background-color: #25506f;
color: white;
border-radius: 5px;
`

const Right = styled.div`
flex: 6;
margin-left:40px;
margin-right:40px;
color: black;
background-color: white;
height: 80vh;
`

function MetaData() {
  return (
    <>
        
   <Container>         
    <Left>
        <Link to="DGs" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>DG's</Link>    
        <Link to="Managers" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>Managers</Link>    
        <Link to="PM/Coordinator" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>PM/Cordinator</Link>    
        <Link to="Developers" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>Lead Developers</Link>    
        <Link to="profile" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>Departments</Link>    
        <Link to="profile" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>Sub Departments</Link>    
        <Link to="profile" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>Technologies</Link>    
        <Link to="profile" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>NDP/PC-1</Link>    
    </Left>
    <Right>
        <Outlet />  
    </Right>
    </Container>     
     
    </>
  )
}

export default MetaData