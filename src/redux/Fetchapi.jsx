import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchApi=async()=>{
  const res= await axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
  const data =await res.data
  console.log(data)
  
}

// export const fetchApi=()=>{
//   const res=axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
//   console.log(res.data)
  
// }



export const fetchPostThunk=createAsyncThunk('post/fetch', ()=>{
  console.log(`Inside thunk`)
 return fetchApi()
})

