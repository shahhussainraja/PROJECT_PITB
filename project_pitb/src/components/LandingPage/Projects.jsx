import React, { useState, useEffect, createContext } from "react";
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
import { styled  as styles} from '@mui/material/styles';
import userService from "../Services/UserService";
import SingleProject from "./SingleProject";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styled from "styled-components"
import Button from "react-bootstrap/Button";
import { useDebounce } from 'use-debounce' 
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const MainContext = createContext();
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid gray;
  height: 40px;
  /* margin-left:3px; */
  margin-bottom: 1px;
  background-color: #1b3d54;
  width: 400%;
`

const Projects = () => {
  const [records,setRecords] =  React.useState([]);
  const [openAddModel, setOpenAddModel] = React.useState(false);

  const [searchInput,setSearchInput] = useState("");
  const [searchInputFn] = useDebounce(searchInput, 1000);
 //this will reflect the  change of Submit and Delete button in Edit Model
  const [changeHandler ,setChangeHandler] = React.useState(1);
 
  const [totalRecord,setTotalRecord] = useState();
  const [page ,setPage] = useState(1);
  const [perPage, setPerPage] = useState(8);

  const handlePage = (event,value)=>{
    setPage(value);
    console.log(page)
  }

  const searchHandle = (e)=>{
    setSearchInput(e.target.value);
  }

  const fetchSearchData =()=>{
    if(searchInputFn !== ""){
      const fetchCall = setTimeout(()=>{
      userService.getSearchDocs(searchInputFn).then((res)=>{
        setRecords(res.results);
        setTotalRecord(res.length);
      }).catch((err)=>{
      })
      },1000)
    }
  }


  const fetchData =()=>{
    if(searchInputFn === ""){
    userService.getDocs(page,perPage).then((res)=>{
      setRecords(res.paginatedResult);
      setTotalRecord(res.length);
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }
  }

  useEffect(fetchData,[changeHandler ,searchInputFn,page]);  
  useEffect(fetchSearchData,[searchInputFn]);

const StyledTableCell = styles(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#2a4c64",
    color: "white",
    fontSize: 13, 
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
    height: "10px"
  },
}));
  return (
    <MainContext.Provider value={setChangeHandler}>
          
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
          <SearchContainer>
           <div style={{backgroundColor:"ghostwhite",marginLeft:"3px",position:"sticky",left:"3px"}}>
          <SearchOutlinedIcon style={{color:"black",cursor:"pointer"}} />
          <input placeholder="search" type="text" onChange={searchHandle} style={{outline:"none",border:"none",color:"black",fontSize:"14px",width:"220px"}}/>
          </div> 
          </SearchContainer>
          <Table sx={{ minWidth: 700,width:"400%"  }} aria-label="customized table" size="small" >
            <TableHead >
              <TableRow >
              <StyledTableCell align="left" style={{width:"20px"}} >#sr</StyledTableCell>
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
                <StyledTableCell align="left">Resources Working</StyledTableCell>
                <StyledTableCell align="left">Team</StyledTableCell>
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
            <TableBody size="small">
            {records.length <=0 ?  true : <>
             { records.map((data,index)=>(
              <SingleProject data ={data} changeHandler = {setChangeHandler} value={index} key={index} /> ))}
            </>}
            </TableBody>
          </Table>
            <Stack  sx={{position:"sticky",left:"50%"}}>
            <Pagination size="small" count={Math.ceil(totalRecord/8)} onChange={handlePage} showFirstButton showLastButton />
          </Stack>
          </TableContainer>
             
          {openAddModel && <AddNewEditModel setModelHandle={setOpenAddModel} modelHandle={openAddModel}   setChangeHandler={setChangeHandler}/>}
      </div>
{/* 
         <div style={{display:"flex",justifyContent: "center",marginBottom:"10px"}}> 
         <Pagination count={Math.ceil(totalRecord/10)} onChange={handleChange} color="primary" />  
          </div> */}
        
  
    </MainContext.Provider>
  )
}
  
export default Projects;
export {MainContext}