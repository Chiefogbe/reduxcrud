import { createSlice } from "@reduxjs/toolkit";
import { userdata } from "./Fetchdata";

const initialState={
  value:userdata
}

export const UserSLice=createSlice({
  name:'user',
  initialState,
  reducers:{
    adduser:(state, action)=>{
        state.value.push(action.payload)
    },

    deleteuser:(state, action)=>{
      state.value=state.value.filter((user)=> user.id !==action.payload.id)
    },

    updateuser:(state, action)=>{
      state.value.map((user)=>{
        if(user.id===action.payload.id){
          user.username=action.payload.username
        }
      })

    }
  }
})

export const {adduser, deleteuser, updateuser}= UserSLice.actions
export default UserSLice.reducer