import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",

    initialState:{
        items:[]
    }, 
    reducers:{
        addCart:(state,action)=>{
            const newData=action.payload
            state.items.push(newData)
        },
    
}
})
export const {addCart}=cartSlice.actions
export default cartSlice.reducer