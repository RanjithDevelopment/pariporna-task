import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { Button } from 'primereact/button';
import axios from 'axios';


export default function Screentwo() {
  const [user, setUser] = useState([]);
  
  useEffect(() => {
    axios.get("https://6321f66582f8687273bdac1b.mockapi.io/users").then((data) => { setUser(data.data) });

  }, []);
  const refresh=()=>{
   window.location.reload();
  }
  

  return (
    <>
    
      <div className="card">
     
        <DataTable value={user} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }} >
        
          <Column field="id" header="ID" style={{ width: '25%' }} sortable   > </Column>
          <Column field="name" header="Name" style={{ width: '25%' }} sortable  ></Column>
          <Column field="email" header="Email" style={{ width: '25%' }} sortable    ></Column>
          <Column field="courses" header="Courses" style={{ width: '25%' }} sortable  ></Column>
          
       
   
        </DataTable>
        <Button label="Refresh" icon="pi pi-refresh" onClick={refresh} style={{width:"10rem"}} />
      </div>
    </>
  );
}

