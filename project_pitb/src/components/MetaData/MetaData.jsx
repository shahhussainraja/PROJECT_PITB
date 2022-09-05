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

`

const Left = styled.div`
left: 0px;
padding-top: 10px;
font-size: 15px;
flex: 1;
display: flex;
flex-direction: column;
align-items: left;  
background-color: #2a4c64;
color: white;
border-radius: 0px 5px 5px 0px;
box-shadow: -5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);
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
        <Link to="PM/Coordinator" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>PM/Coordinators</Link>    
        <Link to="Developers" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>Lead Developers</Link>    
        <Link to="Departments" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>Departments</Link>    
        <Link to="SubDepartments" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>Sub Departments</Link>    
        <Link to="Technologies" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>Technologies</Link>    
        <Link to="NDP-PC" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>NDP/PC-1</Link>    
        <Link to="Teams" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>Teams</Link>    
        <Link to="Regions" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>Regions</Link>    
        <Link to="Status" className='Link' style={{ color: "inherit", textDecoration: "inherit",marginBottom:"2px",paddingLeft:"20px"}}>Status</Link>    
    </Left>
    <Right>
        <Outlet />  
    </Right>
    </Container>     
     
    </>
  )
}

export default MetaData