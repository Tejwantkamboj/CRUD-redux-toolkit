import { configureStore } from "@reduxjs/toolkit";
import  userdetail  from "../features/userDetailSlice";

const store = configureStore({
    reducer:{
        app:userdetail,
    }
})

export default store

