import React, { useState, useEffect, useContext, createContext } from "react";
import Pagination from '@mui/material/Pagination';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import AddDepartment from "./AddDepartment";
import userService from "../../Services/UserService";
import SingleRow from "./SingleRow";


const MainContext = createContext();

function SubDepartmentTable({route}) {
  
    const [records,setRecords] =  React.useState([]);
    const [openModel, setOpenModel] = React.useState(false);
    const [changeHandler ,setChangeHandler] = React.useState(1);
   
    const fetchData =()=>{
      userService.getDynamic(route).then((res)=>{
        setRecords(res);
      }).catch((err)=>{
        console.log(err);
      })
    } 
    useEffect(fetchData,[route,changeHandler]);
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#2a4c64",
      color: "white",
      fontSize: 13, 
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 10,
    },
  }));    


  return (

    <MainContext.Provider value={{openModel,setOpenModel,setChangeHandler, route}}>
    <TableContainer component={Paper}>
    <AddIcon style={{float:"right",cursor:"pointer"}} onClick={()=>{
      setOpenModel(true);
    }}/>
    <Table sx={{ minWidth: "auto",}} aria-label="customized table" size="small">
      <TableHead >
        <TableRow>
        </TableRow>      
        <TableRow >
          <StyledTableCell align="left" >#sr</StyledTableCell>
          <StyledTableCell align="left" >Department</StyledTableCell>
          <StyledTableCell align="left" >SubDepartment</StyledTableCell>
          <StyledTableCell align="left" >Actions</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {records.length <0 ? true  : <>
       { records.map((data,index)=>( <SingleRow data={data} value={index+1} key={index} /> ))}
      </>}
      </TableBody>
    </Table>
  </TableContainer>
  <AddDepartment />
</MainContext.Provider>


  )
}

export default SubDepartmentTable;
export { MainContext };