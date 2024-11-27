import React, { useState } from 'react'
import './Modal.css'
const Modal = ({closemodal,onSubmit, defaultValue}) => {

const [formstate,setFormstate] = useState(
  defaultValue || {
  page: "",
  description:"",
  status:"live"
});

const [errors,setErrors] = useState("")

const validateForm = () => {

  if(formstate.page && formstate.description && formstate.status){
    setErrors("")
    return true;
  }else{
    let errorFields = [];
    for(const [key,value] of Object.entries(formstate)){
      if(!value){
        errorFields.push(key)
      }
    }
    setErrors(errorFields.join(", "))
    return false;
  }
}

const handleChange = (e) =>{
  setFormstate({
    ...formstate,           //dictionary
    [e.target.name]:e.target.value,
  });
};

const handlesubmit = (e) => {
  e.preventDefault();

  if(!validateForm()) return;

  onSubmit(formstate)
  closemodal();
}

  return (
    <div className='modal-container' onClick={(e)=>{
      if(e.target.className === "modal-container") closemodal()
    }}>
      <div className='modal'>
      <form>
        <div className='form-group'>
        <label htmlFor="page">Page</label>
        <input type='text' name="page" value={formstate.page} onChange={handleChange}/>
        </div>
        <div className='form-group'>
        <label htmlFor="description">Description</label>
        <textarea name="description"  value={formstate.description} onChange={handleChange}/>
        </div>
        <div className='form-group'>
        <label htmlFor="status">Status</label>
        <select name="status"  value={formstate.status} onChange={handleChange}>
          <option value="live">Live</option>
          <option value="draft">Draft</option>
          <option value="error">Error</option>
        </select>
        </div>
        {errors && <div className='error'>{`Please include: ${errors}`}</div>}
        <button type='submit' className='btn' onClick={handlesubmit}>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Modal