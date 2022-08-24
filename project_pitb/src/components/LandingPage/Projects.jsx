import React, { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddNewEditModel from "./AddNewEditModel";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import userService from "../Services/UserService";
import SingleProject from "./SingleProject";

const Projects = () => {
  const [records,setRecords] =  React.useState([]);
  const [page, setPage] = React.useState(1);
  const [openAddModel, setOpenAddModel] = React.useState(false);

 //this will reflect the  change of Submit and Delete button in Edit Model
  const [changeHandler ,setChangeHandler] = React.useState(1);
 
  const handleChange = (event, value) => {
    setPage(value);
  };

  const fetchData =()=>{
    userService.getDocs().then((res)=>{
      setRecords(res);
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(fetchData,[]);

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#25506f",
    color: "white",
    fontSize: 13, 
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
  },
}));
  return (
    <>
    <div style={{ justifyContent: "left",position: "relative" ,padding:"10px"}}>
          <Fab size="small" color="primary" sx={{
            backgroundColor:"#25506f",
            color:"white",
            position:"fixed",
            right:"10px",
            bottom:"10px",
          }} aria-label="add" 
        
          onClick={()=>{
          console.log("buttons hits");
          setOpenAddModel(true);
        }}>
        <AddIcon />
        </Fab>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700,width:"350%" }} aria-label="customized table" size="small">
            <TableHead >
              <TableRow >
                <StyledTableCell sx={{position:"sticky",left:"0px",width:'300px',overflowX:"hidden"}}>Project</StyledTableCell>
                <StyledTableCell  align="left" >Year</StyledTableCell>
                <StyledTableCell align="left">Manager</StyledTableCell>
                <StyledTableCell align="left">PM/Coordinator</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Department</StyledTableCell>
                <StyledTableCell  align="left">Higher Department</StyledTableCell>
                <StyledTableCell align="left">Concerned DG</StyledTableCell>
                <StyledTableCell align="left">NDP/PC-1</StyledTableCell>
                <StyledTableCell align="left">Region</StyledTableCell>
                <StyledTableCell align="left">Technology</StyledTableCell>
                <StyledTableCell align="left">URL</StyledTableCell>
                <StyledTableCell align="left">Total Resources</StyledTableCell>
                <StyledTableCell align="left">Resources Working</StyledTableCell>
                <StyledTableCell align="left">Lead (Web)</StyledTableCell>
                <StyledTableCell align="left">Lead (Android)</StyledTableCell>
                <StyledTableCell align="left">GITLAB ID</StyledTableCell>
                <StyledTableCell align="left">Android Repo.Git</StyledTableCell>
                <StyledTableCell align="left">iOS Repo.Git</StyledTableCell>
                <StyledTableCell align="left">Web Repo.Git</StyledTableCell>
                <StyledTableCell align="left">Continuous Development</StyledTableCell>
                <StyledTableCell align="left">Continuous Integration</StyledTableCell>
                <StyledTableCell align="left">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {records.length <0 ? true  : <>
             { records.map((data,index)=>(
              <SingleProject data ={data} changeHandler = {setChangeHandler} key={index} /> ))}
            
            </>}

            
            </TableBody>
          </Table>
        </TableContainer>
          
          {openAddModel && <AddNewEditModel setModelHandle={setOpenAddModel} modelHandle={openAddModel}   setChangeHandler={setChangeHandler}/>}
       
        </div>
{/* 
         <div style={{display:"flex",justifyContent: "center",marginBottom:"10px"}}> 
         <Pagination count={Math.ceil(totalRecord/10)} onChange={handleChange} color="primary" />  
          </div> */}
        
  
    </>
  )
}

export default Projects;