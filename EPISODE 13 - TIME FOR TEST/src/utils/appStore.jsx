import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restReducer from "./restSlice";
const appStore = configureStore({
    reducer:{
        cart:cartReducer,
        restaurant:restReducer,
    },
});


export default appStore;