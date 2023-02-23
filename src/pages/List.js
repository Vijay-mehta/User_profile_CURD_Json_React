import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const List = () => {

  const [userData,setUserData] =useState([])
  console.log(userData);

  useEffect(()=>{
    getAllUsers()

  }
  ,[])

  const getAllUsers=async()=>{
    try{
const data =await axios.get(`http://localhost:3004/users`)
setUserData(data.data)
    }catch(error){
console.log("something is wrong");
    }

  }

  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow style={{display:"flex",justifyContent:"space-between"}}>
            <p align="center">S No.</p>
            <p align="center">Profile</p>
            <p align="center">Name</p>
            <p align="center">Email</p> 
            <p align="center">Number</p> 
            <p align="center">Password</p> 
            <p align="center">Select Value</p> 
            <p align="center">Gender</p> 
            <p align="center">terms && conditions</p> 
            <p align="center"></p>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((row) => (
             <TableRow >
             {/* <TableCell >{id + 1}</TableCell> */}
             <img src={row.profile} style={{width:'200px'}}/>
             <TableCell >{row.name}</TableCell>
             <TableCell >{row.email}</TableCell>
             <TableCell >{row.number}</TableCell>
             <TableCell >{row.password}</TableCell>

             
             </TableRow>
          
       
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default List
