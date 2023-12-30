import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSLice'


export const Storee=configureStore({
  reducer:{
    user: userReducer
  }
})