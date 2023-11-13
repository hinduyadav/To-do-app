import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  let [ data, setData]  = useState({
    name: " ", place: " ", age: " ", dob: ""
  })
  let navigate = useNavigate()
  let { name, place, age, dob } = data;

  const handlechange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value })
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/Users", data)
      .then((val) => {
        console.log("success")
        //navigate("/")
        toast.success("sucessdully registerd")
      })
    // console.log(name,place,age,dob)
  }
  return (
    <>
      <form onSubmit={handlesubmit}>
        <label htmlFor='name' > Name</label>
        < input type="text" name="name" id="name" value={name} onChange={handlechange} /> <br /><br />
        <label htmlFor='place' > Place</label>
        < input type="text" name="place" id="place" value={place} onChange={handlechange} /> <br /><br />
        <label htmlFor='age' > AGE</label>
        < input type="tel" name="age" id="age" value={age} onChange={handlechange} /> <br /><br />
        <label htmlFor='dob' > DOB</label>
        < input type="date" name="dob" id="dob" value={dob} onChange={handlechange} /> <br /><br />
        <input type='submit' value="register" />
        <button> <Link to="/">GO BACK</Link></button>
      </form>
      <ToastContainer/>
    </>
  )
}

export default Create