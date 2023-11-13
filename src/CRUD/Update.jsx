import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  let[users,setUsers]=useState([])
  let[data,setData]=useState({
    name:"",place:"",age:"",dob:""
  })
  let{id}=useParams()
  let navigate=useNavigate();
  useEffect(()=>{
    axios.get("http://localhost:3000/Users/"+id)
    .then((result)=>setData(result.data))
    .catch((error)=>console.log(error))
  },[])
 let handleupdate=(e)=>{
  e.preventDefault();

  axios.put("http://localhost:3000/Users/"+id,data)
  .then((val)=>
navigate("/"))
  }
  let handlechange=(e)=>{
    let {name,value}=e.target;
    setData({...data,[name]:value})

  }
  return (
    <>
    <form onSubmit={handleupdate}>
        <label htmlFor='name' > Name</label>
        < input type="text" name="name" id="name" value={data.name} onChange={handlechange} /> <br /><br />
        <label htmlFor='place' > Place</label>
        < input type="text" name="place" id="place" value={data.place} onChange={handlechange} /> <br /><br />
        <label htmlFor='age' > AGE</label>
        < input type="tel" name="age" id="age" value={data.age} onChange={handlechange} /> <br /><br />
        <label htmlFor='dob' > DOB</label>
        < input type="date" name="dob" id="dob" value={data.dob} onChange={handlechange} /> <br /><br />
        <input type='submit' value="register" />
        <button> <Link to="/">GO BACK</Link></button>
      </form>
    </>
  )
}

export default Update