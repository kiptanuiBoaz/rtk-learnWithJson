import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
    reducer:{
        counter:counterReducer,
    }
})


// A slice is a collection of reducer logic and actions for a single feature