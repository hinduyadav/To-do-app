import React, { Fragment, useState } from 'react'

const Todo = () => {
    let [state,setState]=useState("")
    let [listItem,setList]=useState([]);
    let [edit,setEdit]=useState(null)

    let handlesubmit=(e)=>{
        e.preventDefault();
    }
    let handlechange=(e)=>{
        setState(e.target.value);
    }

    let handleDelete=(id)=>{
        let deleteList=listItem.filter((val,index)=>{
            return index!==id
        })
        setList(deleteList);
    }
    let handleEdit=(id)=>{
     setState(listItem[id])
     setEdit(id)
    }
    let Add=()=>{
        if(state!="")
        {
            if(edit!==null)
            {
                listItem[edit]=state
                setEdit(null);
            }
            else
            {
                setList([...listItem,state])
            }
            setState("");
        }
    }
  return (
    <>
    <div className='main'>
        <div className='container'>
            <h1>TODO APP</h1>   
              <form onSubmit={handlesubmit} autoComplete='off'>
                <input type='text' name='content' placeholder='type your task here' value={state} onChange={handlechange}/>
                <button onClick={Add}>{edit!==null ?"update Item":"Add item"}</button>
              </form>
        </div>
        <section>
            <h2> Your task List</h2>
            {listItem.map((val,index)=>
            {
              return (
                      <Fragment key={index}>
                      <div className='item'>
                       <h3>{val}</h3>
                       <button onClick={()=>handleDelete(index)} id='Delete' >Delete</button>
                       <button onClick={()=>handleEdit(index)} id='Edit' >Edit</button>
                       <br></br>
                       </div> <br></br>
                      </Fragment>
              )
            })}
            
        </section>
        <button onClick={()=>setList([])} id='clear'>clearAll</button>
    </div>
  
</>
  )
        }

export default Todo