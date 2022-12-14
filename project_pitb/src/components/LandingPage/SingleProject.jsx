import React from 'react';
import { Button , Box, Modal} from "@mui/material";
import EditModel from './EditModel';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Dropdown from 'react-bootstrap/Dropdown';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import userService from '../Services/UserService';
import { MainContext } from './Projects';
import { useContext } from 'react';

function SingleProject({  data , value }) {

  //here this for showing the model
  const [openEditModel, setOpenEditModel] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  //here state of table component will change
  const pageRefreshCall = useContext(MainContext);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    const ActionButtonStyle ={
      actionBtn:{
        display:"flex",
        flexDirection:"column", 
        justifyContent:"center",
        alignItems:"center",
        marginLetf:"100px"
      }
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 11,
      },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        innerHeight:10
      },
      '&:nth-of-type(even)': {
        innerHeight:10
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));



    const options = {
      title: '',
      message: 'You want to delete this file',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            userService.deleteDocs(data.id).then((res)=>{
              toast.success('Deleted Successfully', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                });
                pageRefreshCall(Math.floor(Math.random() * 100000000000));
            }).catch((err)=>{
            })
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ],
      closeOnEscape: true,
      closeOnClickOutside: false,
      keyCodeForClose: [8, 32],
      willUnmount: () => {},
      afterClose: () => {},
      onClickOutside: () => {},
      onKeypress: () => {},
      onKeypressEscape: () => {},
      overlayClassName: {
        backgroundColor:"red",
        color:"green "
      }
    };

  return (
    <>
    {openEditModel && <EditModel  setModelHandle={setOpenEditModel} modelHandle={openEditModel}  data={data}  /> }
    <StyledTableRow style={{height:"40px"}} >
              <StyledTableCell align="left" style={{width:"20px"}} >{value+1}</StyledTableCell>
              <StyledTableCell  sx={{position:"sticky",left:"0px",backgroundColor:'ghostwhite'}}>{data.Project}</StyledTableCell>
              <StyledTableCell align="left">{data.Year}</StyledTableCell>
              <StyledTableCell align="left">{data.Manager}</StyledTableCell>
              <StyledTableCell align="left">{data.PM_Coordinator}</StyledTableCell>
              <StyledTableCell align="left">{data.Status}</StyledTableCell>
              <StyledTableCell align="left">{data.Department}</StyledTableCell>
              <StyledTableCell align="left">{data.Higher_Department}</StyledTableCell>
              <StyledTableCell align="left">{data.Concerned_DG}</StyledTableCell>
              <StyledTableCell align="left">{data.NDP_PC}</StyledTableCell>
              <StyledTableCell align="left">{data.Region}</StyledTableCell>
              <StyledTableCell align="left">{data.Technology}</StyledTableCell>
              <StyledTableCell align="left">{data.URL}</StyledTableCell>
              <StyledTableCell align="left">{data.R_Working_on_Active_Projects}</StyledTableCell>
              <StyledTableCell align="left">{data.team}</StyledTableCell>
              <StyledTableCell align="left">{data.Techinical_Lead_Web}</StyledTableCell>
              <StyledTableCell align="left">{data.Techinical_Lead_Android}</StyledTableCell>
              <StyledTableCell align="left">{data.GITLAB_ID}</StyledTableCell>
              <StyledTableCell align="left">{data.Android_Repo}</StyledTableCell>
              <StyledTableCell align="left">{data.iOS_Repo}</StyledTableCell>
              <StyledTableCell align="left"><a href="{data.Web_Repo}" target="_blank">{data.Web_Repo}</a></StyledTableCell>
              <StyledTableCell align="left">{data.Continuous_Development}</StyledTableCell>
              <StyledTableCell align="left">{data.Continuous_Integration}</StyledTableCell>
              <StyledTableCell align="left">
              <Dropdown >
                  <Dropdown.Toggle variant="outlined" id="dropdown-basic" size="sm">
                    <MoreHorizOutlinedIcon size="10px" />
                  </Dropdown.Toggle >
                  <Dropdown.Menu style={{minWidth:"0px"}}>
                    <Dropdown.Item  onClick={()=>{confirmAlert(options);}} style={{fontWeight:"normal",fontSize:"14px "}}>
                     <DeleteOutlineOutlinedIcon style={{fontSize: "18px"}}/>Delete
                    </Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setOpenEditModel(true); }} style={{fontWeight:"normal",fontSize:"14px" }}>
                      <EditOutlinedIcon  style={{fontSize: "16px"}} />Edit
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </StyledTableCell>
            </StyledTableRow>

    </>
  )
}

export default SingleProject;