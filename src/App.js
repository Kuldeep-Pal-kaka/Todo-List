
import React, { useState } from 'react';
import './App.css'
import Table from './components/tables/Table';
import Modal from './components/modals/Modal';
function App() {
  const [modalopen,setModalopen] = useState(false)

  const [rows,setRows]= useState([
    {page: "page1", description:"this is the first page" , status:"live"},
    {page: "page2", description:"this is the seconed page" , status:"draft"},
    {page: "page3", description:"this is the third page" , status:"error"},
  ]);

  const [rowToEdit,setRowToEdit] = useState(null)

const handledeletebtn = (targetindex) =>{
  setRows(rows.filter((_,idx) => idx !== targetindex))
}

const handleEditRow = (idx) =>{
  setRowToEdit(idx);
  setModalopen(true)
}

const handleSubmit = (newRow) =>{
  rowToEdit === null
   ? setRows([...rows, newRow])
   :setRows(
    rows.map((currRow,idx) => {
    if(idx !== rowToEdit) return currRow;
    
    return newRow;
  })
);
};

  return (
    <div className="App">
     <Table rows={rows} deleteRow={handledeletebtn} editRow={handleEditRow}/>
    <button className='btn' onClick={()=>setModalopen(true)}> Add</button>
    {modalopen && (<Modal closemodal={()=>{
      setModalopen(false)
    }}
  onSubmit={handleSubmit}
  defaultValue={rowToEdit !== null && rows[rowToEdit]}
    />)}
    </div>
  );
}

export default App
