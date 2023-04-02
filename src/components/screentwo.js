import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api'
import { InputText } from "primereact/inputtext";
import axios from 'axios';
import Navbar from './navbar';

export default function PaginatorBasicDemo() {
  const [user, setUser] = useState([]);
  
  useEffect(() => {
    axios.get("https://6321f66582f8687273bdac1b.mockapi.io/users").then((data) => { setUser(data.data) });

  }, []);

  return (
    <>
      <Navbar />
     
      <div className="card">
       
        <DataTable value={user} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }} >
          <Column field="id" header="ID" style={{ width: '25%' }} sortable   > </Column>
          <Column field="name" header="Name" style={{ width: '25%' }} sortable  ></Column>
          <Column field="email" header="Email" style={{ width: '25%' }} sortable    ></Column>
          <Column field="age" header="Age" style={{ width: '25%' }} sortable    ></Column>
          <Column field="gender" header="Gender" style={{ width: '25%' }} sortable   ></Column>
          <Column field="courses" header="Courses" style={{ width: '25%' }} sortable  ></Column>
        </DataTable>
      </div>
    </>
  );
}