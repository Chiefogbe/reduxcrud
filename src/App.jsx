import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, deleteuser, updateuser } from './redux/UserSLice'
import { useState } from 'react'


const App = () => {
  const userslice=useSelector((state)=>state.user.value)
  const dispatch=useDispatch()
  const [username, setUsername]=useState()
  const [email, setEmail]=useState()
  const [age, setAge]=useState()
  const [newuser, setNewuser]=useState()
 
  return (
    <div>
      <h3>Welcome To Redux Class</h3>
      <input type="text" placeholder='username...' onChange={(e)=>setUsername(e.target.value)} />
      <input type="text" placeholder='email...' onChange={(e)=>setEmail(e.target.value)} />
      <input type="number" placeholder='age...' onChange={(e)=>setAge(e.target.value)} />
      <button onClick={()=>dispatch(adduser({id:userslice[userslice.length-1].id+1, username, email, age}))}>add</button>
      {userslice.map((user, key)=>{
        return(
          <div key={key}>
            <h3>{user.username}</h3>
            <h3>{user.email}</h3>
            <h3>{user.age}</h3>
            <input type="text" placeholder='username...' onChange={(e)=>setNewuser(e.target.value)} />
            <button onClick={()=>dispatch(updateuser({id:user.id, username:newuser}))}>Update</button>
            <button onClick={()=>dispatch(deleteuser({id:user.id}))}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default App
