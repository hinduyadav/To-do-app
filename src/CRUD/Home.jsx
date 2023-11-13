import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Home = () => {
let[users,setUsers]=useState([])




useEffect(()=>{
  axios.get("http://localhost:3000/Users")
  .then((result)=>setUsers(result.data))
  .catch((error)=>console.log(error))
},[])
let handledelete=(id)=>{
  axios.delete("http://localhost:3000/Users/"+id)
  .then(()=>{
    console.log("deleted successfully")
    window.location.reload()
  })

}
 return (
    <>
    <button> <Link to="/create">Add</Link></button>
    <table>
      <thead>
        <tr>
          <th>Id  </th>
          <th> Name </th>
          <th>Place  </th>
          <th>Age  </th>
          <th> DOB </th>
        </tr>
      </thead>

      <tbody>
        
        {
          users.map((val)=>{
            return(

              <React.Fragment key={val.id}>
              <tr>
                 <td>{val.id}  </td>
                 <td>{val.name}  </td>
                 <td>{val.place}</td>
                 <td>{val.age}</td>
                 <td>{val.dob}</td>
                  <td> <button><Link to={`/read/${val.id}`}>Read</Link>  </button></td>
                  <td> <button><Link to={`/update/${val.id}`}>Edit </Link> </button></td>
                  <td> <button onClick={()=>handledelete(val.id)}>Delete  </button></td>
              </tr>

              </React.Fragment>
            )
          })

       }
        </tbody>
    </table>
    </>
  )
}

export default Home