import { createSlice } from "@reduxjs/toolkit";

const restSlice=createSlice({
    name:"restaurants",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clear:(state)=>{
            state.items.length=0;
        }
    }
});
export const {addItem,removeItem,clear} = restSlice.actions;
export default restSlice.reducer;