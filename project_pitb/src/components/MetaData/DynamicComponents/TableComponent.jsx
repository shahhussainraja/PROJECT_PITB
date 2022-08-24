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
import AddComponent from "./AddComponent";
import userService from "../../Services/UserService";
import SingleRow from "./SingleRow";


const DetailContext = createContext();
function TableComponent({route}) {
  
    const [records,setRecords] =  React.useState([]);
    const [openModel, setOpenModel] = React.useState(false);
    const [changeHandler ,setChangeHandler] = React.useState(1);
   
    const fetchData =()=>{
      userService.getDynamic(route).then((res)=>{
        setRecords(res);
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
    } 
    useEffect(fetchData,[route]);
  
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

    <DetailContext.Provider value={{openModel,setOpenModel,changeHandler}}>

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
          <StyledTableCell align="left" >Name</StyledTableCell>
          <StyledTableCell align="left" >Actions</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {records.length <0 ? true  : <>
       { records.map((data,index)=>( <SingleRow data={data} value={index+1} /> ))}
      </>}
      </TableBody>
    </Table>
  </TableContainer>
  <AddComponent />
</DetailContext.Provider>


  )
}

export default TableComponent;
export { DetailContext };