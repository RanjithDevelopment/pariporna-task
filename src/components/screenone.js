import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { InputText } from "primereact/inputtext";

import axios from 'axios';

export default function ScreenOne() {
  
  const [user, setUser] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  useEffect(() => {
    axios.get("https://6321f66582f8687273bdac1b.mockapi.io/users").then((data) => { setUser(data.data) });

  }, []);
  const getHeader = () => {
    return (
        <div className="flex justify-content-end">
            <div className="p-input-icon-left">
                <i className="pi pi-search"></i>
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
            </div>
        </div>
    );
};

let header = getHeader();
  return (
    <>
      
      <div style={{alignItems:"center",alignContent:"center"}}>
      <h1>ScreenOne  </h1>
     
        </div>
        
      <div className="card">
     
           
   
        <DataTable value={user} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }} globalFilter={globalFilter} header={header}  >
          <Column field="id" header="ID" style={{ width: '25%' }}  filter filterPlaceholder="Filter by id" > </Column>
          <Column field="name" header="Name" style={{ width: '25%' }} filter filterPlaceholder="Filter by Name" ></Column>
          <Column field="email" header="Email" style={{ width: '25%' }} filter filterPlaceholder="Filter by email" ></Column>
          <Column field="age" header="Age" style={{ width: '25%' }}filter filterPlaceholder="Filter by age" ></Column>
          <Column field="gender" header="Gender" style={{ width: '25%' }} filter filterPlaceholder="Filter by gender"></Column>
          <Column field="courses" header="Courses" style={{ width: '25%' }} filter filterPlaceholder="Filter by courses"></Column>
          
        </DataTable>
      </div>
    </>
  );
}