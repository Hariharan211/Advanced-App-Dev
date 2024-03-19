import { configureStore } from "@reduxjs/toolkit";
import userSlice from './Userslice'
export default configureStore({
    reducer :{
        user:userSlice,
    }
})