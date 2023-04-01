import React, { useEffect, useState }  from 'react'
import Navbar from './navbar'
import "../css/screenone.css";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Screentwo = () => {
    const [apiData,setapidata]=useState();
   
    //mounting phase of the component 
  useEffect(() => {
    // on mounting phase here i hit the api and get the response
    async function getapidata() {
      const response = await axios.get("https://6321f66582f8687273bdac1b.mockapi.io/users");

  setapidata(response.data);
    }
    getapidata();
},[]);
  

  return (
    <>
      <Navbar/>
      <div className='Table'>
     {apiData?  <TableContainer component={Paper} sx={{ width: 800,marginTop:"5px",border:"5px" }}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                <TableCell align="right" style={{fontWeight:"bold"}}>ID</TableCell>
                  <TableCell align="right" style={{fontWeight:"bold"}}>Name</TableCell>
                  <TableCell align="right" style={{fontWeight:"bold"}}>Email</TableCell>
                  <TableCell align="right" style={{fontWeight:"bold"}}>Age</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {apiData.map((row) => (
                  <TableRow key={row.id}>
                    
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    
                    

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          :<></>}
    </div>
    </>
  )
}

export default Screentwo
