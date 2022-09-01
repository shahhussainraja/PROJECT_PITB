import React from 'react';
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
import EditComponent from './EditDepartment';
import {MainContext} from "./SubDepartmentTable"
import { useContext } from 'react';
import userService from '../../Services/UserService';

function SingleRow({ data , value }) {

  const context = useContext(MainContext);

  //here this for showing the model
  const [openEditModel, setOpenEditModel] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

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
        fontSize: 10,
      },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));



    const options = {
      title: '',
      message: 'You want to delete this Record',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            userService.deleteDynamic(context.route,data.id).then((res)=>{
              toast.success('Deleted Successfully', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                });
                context.setChangeHandler(Math.floor(Math.random() * 100000000000));
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
    <StyledTableRow>
              <StyledTableCell align="left">{value}</StyledTableCell>
              <StyledTableCell align="left">{data.higher_departmentName}</StyledTableCell>
              <StyledTableCell align="left">{data.Name}</StyledTableCell>
                <StyledTableCell align="left">
              <Dropdown>
                  <Dropdown.Toggle variant="Light" id="dropdown-basic" size="sm">
                    <MoreHorizOutlinedIcon />
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{minWidth:"0px"}}>
                    <Dropdown.Item onClick={()=>{confirmAlert(options);}} style={{fontWeight:"normal",fontSize:"14px "}}>
                     <DeleteOutlineOutlinedIcon style={{fontSize: "18px"}}/>Delete
                    </Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setOpenEditModel(true); }} style={{fontWeight:"normal",fontSize:"14px" }}>
                      <EditOutlinedIcon style={{fontSize: "16px"}}/>Edit
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </StyledTableCell>
            </StyledTableRow>

    {openEditModel && <EditComponent modelHandle={openEditModel} setModelHandle={setOpenEditModel} data={data}/> }

    </>
)}

export default SingleRow