import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Todos = () => {
  const[renderdata,setRenderdata]=useState([]);
  const renderAPI = () =>{
    let api = 'https://jsonplaceholder.typicode.com/todos';
    axios.get(api).then((success)=>{
      console.log(success.data);
      setRenderdata(success.data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    renderAPI();
  },[])
  return (
    <div>
      <Typography variant='h4' sx={{textAlign:'center'}}>Todos</Typography>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell sx={{fontWeight:'bold'}}>ID</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="center">User&nbsp;ID</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="left">Title</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  
            {renderdata.map((e,i) => (
              <TableRow
                key={e}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              
                <TableCell >{e.id}</TableCell>
                <TableCell align="center">{e.userId}</TableCell>
                <TableCell align="left">{e.title}</TableCell>
                {e.completed ==true?
                <TableCell sx={{fontWeight:'bold',color:'green'}} align="right">Completed</TableCell>:
                <TableCell sx={{fontWeight:'bold', color:'red'}} align="right">Incomplete</TableCell>
                }
              </TableRow>
            ))} 
           
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Todos;