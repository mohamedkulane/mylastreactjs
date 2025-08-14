import { configureStore } from "@reduxjs/toolkit";
import createSlice from "../reducer/cart"

const store=configureStore({
    reducer:{
        cart:createSlice
    }
})
export default store;