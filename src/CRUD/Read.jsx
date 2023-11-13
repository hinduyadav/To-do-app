import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
  let[users,setUsers]=useState([])
  let{id}=useParams()
  useEffect(()=>{
    axios.get("http://localhost:3000/Users/"+id)
    .then((result)=>setUsers(result.data))
    .catch((error)=>console.log(error))
  },[])
  return (
    <div>
      <h1>{users.id}</h1>
      <h1>{users.name}</h1>
      <h1>{users.place}</h1>
      <h1>{users.age}</h1>
      <h1>{users.dob}</h1>
      <button> <Link to={`/update/${users.id}`}>EDIT</Link></button>
      <button><Link to={`/`}>GOback</Link></button>
      
  </div>
  )
}

export default Read